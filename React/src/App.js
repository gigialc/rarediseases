import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomAppBar from './appbar';
import { Openai } from './scripts/testOpen.mjs';

const CustomButton = styled(Button)({
  backgroundColor: '#4DB5FF',
  '&:hover': {
    backgroundColor: '#007BFF',
  },
});

const HighlightText = styled(Typography)({
  color: '#4DB5FF',
  fontWeight: 'bold',
});

function App() {
  const [inputs, setInputs] = useState({
    targetAudience: '',
    prompt: '',
    objective: ''
  });
  const [generatedContent, setGeneratedContent] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = await Openai([inputs.targetAudience, inputs.prompt, inputs.objective]);
    setGeneratedContent(content.message.content);
    console.log('c0ntent', content)
  }

  return (
    <Box sx={{ backgroundColor: '#F0F8FF', py: 0 }}>
      <CustomAppBar />
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" sx={{ textAlign: 'center', mt: 5, mb: 2, color: '#003366', fontWeight: "bold" }}>
          ALS Awareness Campaign
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>
          Raise awareness and support for ALS research and patient care
        </Typography>
        <Card elevation={3} sx={{ my: 4, p: 3 }}>
          <CardContent>
            <HighlightText variant="h5" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
              Generate Personalized ALS Awareness Content
            </HighlightText>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Target Audience"
                name="targetAudience"
                value={inputs.targetAudience}
                onChange={handleChange}
                sx={{ mb: 2, width: '100%' }}
              />
              <TextField
                label="Prompt"
                name="prompt"
                value={inputs.prompt}
                onChange={handleChange}
                sx={{ mb: 2, width: '100%' }}
              />
              <TextField
                label="Objective"
                name="objective"
                value={inputs.objective}
                onChange={handleChange}
                multiline
                rows={4}
                sx={{ mb: 2, width: '100%' }}
              />
              <CustomButton type="submit" variant="contained" sx={{ display: 'block', mx: 'auto', mb: 5 }}>
                Generate Content
              </CustomButton>
           </form>
            {generatedContent && (
              <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
                {generatedContent}
              </Typography>
            )}
          </CardContent>
        </Card>
        {/* ... other components ... */}
      </Container>
    </Box>
  );
}

export default App;
