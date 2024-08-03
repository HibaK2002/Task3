import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(229, 9, 22, 0.5)', 
        padding: '16px',
        textAlign: 'center'
      }}
    >
      <Typography variant="h5" color="white">
        Get All the Demo Template and Features now!
      </Typography>
      <Typography variant="h2" color="white">
        Get StreamLab TODAY!
      </Typography>
      <Button 
        variant="contained" 
        sx={{ 
          marginTop: '16px',
          backgroundColor: '#E50916', 
          '&:hover': {
            backgroundColor: '#d40818',
          }
        }}
      >
        Purchase Now
      </Button>
    </Box>
  );
}

export default Footer;
