import React from "react";
import { Box } from "@mui/material";
import Background from "../assets/BackgroundFirstSection.jpg";
import logo from "../assets/Logo-2.png"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.png'; 

function FirstSection(props) {
  return (
    <Box className="container">
      
      <Box
        sx={{
          height: "980px",
          backgroundImage: `url('${Background}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >

        <Box
          sx={{
            fontSize: 30,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 75
          }}
        >
          <img src={logo} alt="LOGO" style={{ width: '250px' }} />
          <h3>Movies TV Shows & Video Streaming </h3>
          <h3>World press theme!</h3>
          
        </Box>
      </Box>
      
      <Box
        sx={{
         
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: -85, 
          padding: 2, 
        }}
      >
        <Carousel 
          showArrows={true} 
          autoPlay={true} 
          infiniteLoop={true} 
          showThumbs={false} 
          showStatus={false}
          sx={{ 
            width: '100%', 
            maxWidth: '400px', 
            height: '300px', 
          }}
        >
          <div>
            <img src={image1} alt="Slide 1" style={{ width: '40%', height: '40%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={image2} alt="Slide 2" style={{ width: '40%', height: '40%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={image3} alt="Slide 3" style={{ width: '40%', height: '40%', objectFit: 'cover' }} />
          </div>
        </Carousel>
      </Box>
    </Box>
  );
}

export default FirstSection;
