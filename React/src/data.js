import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, Link } from '@mui/material';
import CustomAppBar from './appbar';

function Data() {
  return (
    <Box sx={{ backgroundColor: '#F8F5F7', paddingBottom: 100 }}>
      <CustomAppBar />
      <Container maxWidth="sm"> {/* maxWidth can be adjusted based on your preference */}
        <Typography variant="h3" align="center" sx={{ color: '#b666d2', fontWeight: 'bold', mb: 5 }}>
          Where do we source our data?
        </Typography>
        <Link href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}> {/* Removed paddingLeft to center align */}
            PubMed
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}> {/* Removed paddingLeft and added margin top for spacing */}
            PubMed is a free search engine accessing primarily the MEDLINE database of references and abstracts on life sciences and biomedical topics.
          </Typography>
        </Link>
      </Container>
    </Box>
  );
}

export default Data;
