import React from "react";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";

function SectionTwo() {
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
        <h3>REDUX</h3>
        <h3>MAS</h3>
        <h3>Elementor</h3>
        <h3>MailChimp</h3>
        <h3>Contact Form</h3>
      </Stack>
    </Box>
  );
}

export default SectionTwo;
