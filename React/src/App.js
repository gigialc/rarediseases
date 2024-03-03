import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { addDoc, collection } from 'firebase/firestore';
import db from './firebase-config'; // Import the Firestore instance
import CustomAppBar from './appbar';

// Import the useState and useEffect hooks for calling apis
import {useState, useEffect} from 'react';
import api from './api';

// Custom Components
const CustomButton = styled(Button)({
  backgroundColor: '#b666d2',
  '&:hover': {
    backgroundColor: '#a8003b',
  },
});

const HighlightText = styled(Typography)({
  color: '#b666d2',
  fontWeight: 'bold',
});

export default function App() {
  const navigate = useNavigate(); // useNavigate hook to handle navigation

  const handleClick = () => {
    navigate('/demo'); // Use navigate with the route as argument
  }

  return (
    <Box sx={{ backgroundColor: '#F8F5F7', py: 0 }}>
    <CustomAppBar />
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" sx={{ textAlign: 'center', mt: 5, mb: 2, color: '#84003B', fontWeight: "bold" }}>
        Older Sister
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>
        Empowering Women Through Personalized Reproductive Health Education
      </Typography>
      <Card elevation={3} sx={{ my: 4, p: 3 }}>
        <CardContent>
          <HighlightText variant="h5" component="h2" sx={{ textAlign: 'center', mb: 2, color:"#84003B" }}>
            Personalized Women's Health Education API
          </HighlightText>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
            For Period Tracking, Birth Control, and Reproductive Health Apps.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            At Older Sister, we leverage AI to provide personalized, accurate, and accessible health education, tailored to women's unique needs worldwide.
          </Typography>
        </CardContent>
      </Card>
      {/* <HighlightText variant="h5" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
        How It Works
      </HighlightText> */}
      {/* <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
        Request content → Curate from medical journals → Set brand tone → Deliver tailored information → Review and integrate
      </Typography> */}
      <CustomButton variant="contained" onClick={handleClick} sx={{ display: 'block', mx: 'auto', mb: 5, backgroundColor: "#84003B" }}>
        Try
      </CustomButton>
      <Typography variant="h5" component="h2" id="contact-section" sx={{ textAlign: 'center', mb: 2,paddingTop: 18 }}>
        Contact
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 2, paddingTop:1 , paddingBottom: 5}}>
        Georgina Alcaraz | <a href="mailto:galcaraz@bu.edu" style={{ color: 'inherit', textDecoration: 'none' }}>galcaraz@bu.edu</a>
      </Typography>
    </Container>
  </Box>
  );
}

