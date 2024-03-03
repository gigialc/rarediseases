from database import Base
from sqlalchemy import Column, Integer, String

class Inputs(Base):
    __tablename__ = "inputs"

    id = Column(Integer, primary_key=True, autoincrement=True)
    question = Column(String)
    age = Column(Integer)
    ethnicity = Column(String)


