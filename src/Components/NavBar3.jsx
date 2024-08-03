import React from "react";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";

function NavBar3() {
  return (
    <Box
      sx={{
        backgroundColor: "#E50916",
        width: '100vw', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          height: "80px",
          width: '100%',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>24/7 Effective And Friendly Support</h1>
        
      </Stack>
    </Box>
  );
}

export default NavBar3;
