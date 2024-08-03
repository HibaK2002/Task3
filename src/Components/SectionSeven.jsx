import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavBar3 from './NavBar3';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000',
});

const ContentWrapper = styled('div')({
  padding: '20px',
  backgroundColor: 'white',
  minHeight: 'calc(100vh - 64px)', 
  boxSizing: 'border-box',
  position: 'relative', 
});

const FooterText = styled('p')({
  position: 'absolute',
  bottom: '20px', 
  right: '20px', 
  margin: 0,
  fontSize: '0.875rem', 
  lineHeight: 1.5, 
  maxWidth: '300px', 
  textAlign: 'right', 
});

function SectionSeven(props) {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            <h5>Themes responsiveness</h5> 
            <h2>Fully responsive and Retina ready!</h2> 
            <h5>
              Get an optional viewing experience across all major devices like desktop and mobile. Streamlab is fully responsive, and the images, videos, text will scale down for smaller devices.
            </h5>
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <ContentWrapper>
        <FooterText>
          Elementor offers an intuitive interface and flexibility. It is one of the most user-friendly page builders for WordPress. Customize your template with ease using a set of additional elements.
        </FooterText>
      </ContentWrapper>
      <NavBar3 /> {/* Add SectionTwo here */}
    </>
  );
}

export default SectionSeven;


