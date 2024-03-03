import React, { useState, useEffect } from 'react';
import CustomAppBar from './appbar';
import api from './api';

const Demo = () => {
    const [input, setInput] = useState([]);
    const [formData, setFormData] = useState({
      question: '',
      age: '',
      ethnicity: '',
    });

    const fetchInputs = async () => {
      const response = await api.get('/inputs/');
      setInput(response.data);
    }
    
    useEffect(() => {
      fetchInputs();
    }, []);

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      await api.post('/inputs/', formData);
      fetchInputs();
      setFormData({
        question: '',
        age: '',
        ethnicity: '',
      });
    };

    // Inline styles for background and centering
    const containerStyle = {
      backgroundColor: '#F8F5F7', 
      height: '100vh',
      marginTop: '0px',

    };

    const formStyle = {
      maxWidth: '80%', // Set a max width for the form
      width: '80%', 
      margin: 'auto',
      paddingTop: '80px',
    };

    const headers = {
      color: "#84003B",
      fontWeight: 'bold'
    };

    const button = {
      backgroundColor: '#b666d2',
      '&:hover': {
        backgroundColor: '#a8003b',
      },
    };


    return (
        <div style={containerStyle}> {/* Apply the background and centering styles */}
          <CustomAppBar />
            <form onSubmit={handleFormSubmit} style={formStyle}> {/* Apply the form styles */}
              {/* Form fields remain the same */}
              <div className="mb-3">
                <label htmlFor="question" className="form-label" style={headers} >
                  Question 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="age" className="form-label"   style={headers}>
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ethnicity" className="form-label"  style={headers}>
                  Ethnicity
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ethnicity"
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                />
              </div>   
              <button type="submit" className="btn btn-primary" style={button}>
                Submit
              </button>
            </form>
        </div>
    );
}

export default Demo;
