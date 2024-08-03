import React from 'react';
import { Box, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DownloadingIcon from '@mui/icons-material/Downloading';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

function NavBar2() {
  return (
    <Box
      sx={{
        backgroundColor: 'red',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100px', 
      
        width: '100%',
       
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LocalPhoneIcon sx={{ color: 'white', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            Customer Support
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DownloadingIcon sx={{ color: 'white', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            One Click Import
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DescriptionIcon sx={{ color: 'white', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            Well Documented
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SettingsIcon sx={{ color: 'white', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            The Perfect Theme
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar2;
