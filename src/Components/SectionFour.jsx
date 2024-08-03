import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Home from "../assets/Home.png"; 
import NavBar2 from '../Components/NavBar2'; 

function SectionFour(props) {
  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#333',
        color: '#fff'
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '2%', color: 'white' }}>
        Awesome 3+ Homepages
      </Typography>

      <Box sx={{ textAlign: 'center' }}>
        <img src={Home} alt="Home" style={{ width: '300px', height: 'auto' }} />
        <Typography sx={{ color: '#fff', marginTop: 1 }}>
          Main Home
        </Typography>
      </Box>

      <NavBar2 /> {/* Add SectionTwo here */}
    </Box>
  );
}

export default SectionFour;
