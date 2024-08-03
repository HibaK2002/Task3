import React from "react";
import { Box } from "@mui/material";
import Blue from "../assets/Blue.jpg"; 
import Green from "../assets/Green.jpg"; 

function SectionThree(props) {
  return (
    <Box className="container">
      {props.children}
      <Box sx={{ 
        backgroundColor: '#333', 
        padding: '40px', 
        textAlign: 'center' 
      }}>
        <h2 style={{ color: 'white' }}>Model Built-in Color Demos</h2> {}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px', 
            flexWrap: 'wrap', 
            padding: '20px', 
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <img src={Blue} alt="Blue Color Demo" style={{ width: '400px', height: 'auto' }} /> {}
            <p style={{ color: 'white', marginTop: '10px' }}>Blue Demo</p> {}
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <img src={Green} alt="Green Color Demo" style={{ width: '400px', height: 'auto' }} /> {}
            <p style={{ color: 'white', marginTop: '10px' }}>Green Demo</p> {}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionThree;
