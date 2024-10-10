
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        BLABLA, Fullständiga rättigheter
        <Link to="/categories" className="footer-link">Kategorier</Link> 
        <Link to="/rated" className="footer-link">Topplista</Link>
        </p>
        </footer>
      );
    }
      export default Footer;       
 
/*import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'blue',
        color: 'white', 
        padding: '10px', 
        position: 'fixed', 
        bottom: 0, 
        width: '100%',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">
        BLABLA, Fullständiga rättigheter
        <Link href="/CategoryPage" sx={{ color: 'white', marginLeft: '200px', textDecoration: 'none' }}>
          Kategorier
        </Link>
        <Link href="/Topplista" sx={{ color: 'white', marginLeft: '200px', textDecoration: 'none' }}>
          Topplista
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
*/




