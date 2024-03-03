// Footer.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import './App.css';

function Footer() {
  return (
    <Box sx={{
      textAlign: 'center',
      padding: '20px 0',
      marginTop: 'auto',
      backgroundColor: '#f0f0f0', // Adjust the background color as needed
      width: '100%',
    }}>
      <Typography variant="h6">
        Contact
      </Typography>
      <Typography variant="body1">
        Georgina Alcaraz | galcaraz@bu.edu
      </Typography>
      <Typography variant="body1" sx={{ paddingBottom: 2 }}>
        Student at Boston University
      </Typography>
    </Box>
  );
};

export default Footer;
