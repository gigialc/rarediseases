# main.py
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models

from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
from uuid import UUID

app = FastAPI()
# Define your CORS middleware configuration right after initializing your FastAPI app
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputsBase(BaseModel):
    question: str
    age: int
    ethnicity: str

class InputsModel(InputsBase):
    id: int
    class Config:
        orm_mode = True

#database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#dependency injection
db_dependency = Annotated[Session, Depends(get_db)]
models.Base.metadata.create_all(bind=engine)

#api endpoints
@app.post("/inputs/", response_model=InputsModel)
async def create_input(inputs: InputsBase, db: db_dependency):
    #add to database
    db_input = models.Inputs(**inputs.model_dump())
    db.add(db_input)
    db.commit()
    db.refresh(db_input)
    return db_input


@app.get("/inputs/", response_model=List[InputsModel])
async def read_inputs(db: db_dependency, skip: int = 0, limit: int = 100):
    inputs = db.query(models.Inputs).offset(skip).limit(limit).all()
    return inputs