import React from "react";
import { Box, Typography } from "@mui/material";
import BackgroundFirstSection from "../assets/BackgroundFirstSection.jpg";
import Price from "../assets/Price.png";

function SectionFive() {
  return (
    <Box
      textAlign="center"
      sx={{
        backgroundImage: `url(${BackgroundFirstSection})`,
        
        backgroundColor: '#000', 
        marginTop: '-6%' // just to make it falls excatly down the NavBar2
      }}
    >
     
      <Typography marginTop={8} variant="h2" component="h2"  color="white">
        Awesome Inner Pages
      </Typography>
      <Box display="flex" justifyContent="space-around" alignItems="flex-start" mt={4}>
        <Box flex="1" minWidth="30%" textAlign="center">
          <Typography variant="h6" component="h6" fontWeight="bold" color="white">
            Login
          </Typography>
          <Typography color="white">
            Users on Login are provided with a list of videos that matches their subscription list
          </Typography>
        </Box>
        <Box flex="1" minWidth="30%" textAlign="center">
          <Typography variant="h6" component="h6" fontWeight="bold" color="white">
            Register
          </Typography>
          <Typography color="white">
            Users on register are provided with some free resources and some extended features
          </Typography>
        </Box>
        <Box flex="1" minWidth="30%" textAlign="center">
          <Typography variant="h6" component="h6" fontWeight="bold" color="white">
            Recover Password
          </Typography>
          <Typography color="white">
            Users on recover password can get account password
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
        <img
          src={Price}
          alt="Price"
          style={{ width: '500px', height: 'auto', marginTop: '5%' }}
        />
      </Box>
      <Box display="flex" justifyContent="space-around" alignItems="flex-start" mt={4}>
        <Box flex="1" minWidth="30%" textAlign="center">
          <Typography variant="h6" component="h6" fontWeight="bold" color="white">
            Pricing Page
          </Typography>
          <Typography color="white">
            Users on pricing page can choose account subscription according to their requirements
          </Typography>
        </Box>
        <Box flex="1" minWidth="30%" textAlign="center">
          <Typography variant="h6" component="h6" fontWeight="bold" color="white">
            Pricing Page
          </Typography>
          <Typography color="white">
            Users on pricing page can choose account subscription according to their requirements
          </Typography>
        </Box>
        <Box flex="1" minWidth="30%" textAlign="center">
          <Typography variant="h6" component="h6" fontWeight="bold" color="white">
            Contact Us
          </Typography>
          <Typography color="white">
            Users on Contact Us page can directly engage with site owners
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionFive;
