import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

const CustomAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: "#F8F5F7" }}>
      <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Page navigation links */}
        <Button component={Link} to="/" sx={{ my: 1, mx: isMobile ? 0.5 : 1.5, fontSize: isMobile ? 12 : 15, color: "black", textTransform: 'none' }}>
          Home
        </Button>
        <Button component={Link} to="/data" sx={{ my: 1, mx: isMobile ? 0.5 : 1.5, fontSize: isMobile ? 12 : 15, color: "black", textTransform: 'none' }}>
          Data Sources
        </Button>
        <Button component={Link} to="/demo" sx={{ my: 1, mx: isMobile ? 0.5 : 1.5, fontSize: isMobile ? 12 : 15, color: "black", textTransform: 'none' }}>
          Try the API
        </Button>
        
        {/* In-page navigation button for "Contact Us" */}
        <Button component={Link} to="/" onClick={() => scrollToSection('contact-section')} sx={{ my: 1, mx: isMobile ? 0.5 : 1.5, fontSize: isMobile ? 12 : 15, color: "black", textTransform: 'none' }}>
            Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
