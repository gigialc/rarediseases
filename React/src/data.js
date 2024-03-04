import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, Link } from '@mui/material';
import CustomAppBar from './appbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Data() {
  return (
    <Box sx={{ backgroundColor: '#F8F5F7', paddingBottom: 100 }}>
      <CustomAppBar />
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" sx={{ color: 'blue', fontWeight: 'bold', mb: 5 }}>
          Where do we source our data?
        </Typography>
        
        <Typography variant="h6" align="center" sx={{ mt: 4, fontWeight: 'bold' }}>
          Key Research Articles
        </Typography>
        <List sx={{ mt: 2 }}>
          <ListItem>International Recommendations for the Diagnosis and Management of Patients with Adrenoleukodystrophy</ListItem>
          <ListItem>Time to Transplant in X-Linked Adrenoleukodystrophy</ListItem>
          <ListItem>Presymptomatic Lesion in Childhood Cerebral Adrenoleukodystrophy: Timing and Treatment</ListItem>
          <ListItem>MRI surveillance of boys with X-linked adrenoleukodystrophy identified by newborn screening</ListItem>
          <ListItem>Structure and Function of the ABCD1 Variant Database</ListItem>
          <ListItem>A report on state-wide implementation of newborn screening for X-linked Adrenoleukodystrophy</ListItem>
        </List>
      </Container>
    </Box>
  );
}


export default Data;
