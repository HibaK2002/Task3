import React from 'react';
import E from "../assets/E.png";
import Trans from "../assets/Trans.png";
import Font from "../assets/Font.png";
import W3 from "../assets/W3.png";
import B from "../assets/B.png";
import UC from "../assets/uc.png";
import mc from "../assets/mc.png";
import ac from "../assets/ac.png";
import awe from "../assets/awe.png";
import { Box, Typography } from '@mui/material';


const logos = [
  { src: E, alt: 'Logo 1', href: 'https://elementor.com/', label: 'Elementor' },
  { src: Trans, alt: 'Logo 2', href: 'https://translate.google.com/', label: 'Google Translate' },
  { src: W3, alt: 'Logo 4', href: 'https://www.w3schools.com/', label: 'W3Schools' },
  { src: UC, alt: 'Logo 6', href: 'https://unlimitedcolors.com/', label: 'Unlimited Colors' },
  { src: mc, alt: 'Logo 7', href: 'https://mailchimp.com/', label: 'Mail Chimp' },
  { src: ac, alt: 'Logo 8', href: 'https://www.advancedcustomfields.com/', label: 'Adv Customizer' },
  { label: 'Quck View' },
  { src: B, alt: 'Logo 5', href: 'https://getbootstrap.com/', label: 'Bootstrap' },
  { label: 'Flat Icon' },
  { src: awe, alt: 'Logo 11', href: 'https://fontawesome.com/icons', label: 'Font Awesome Icon' },
  { label: 'Revloution Slider' },
  { label: 'Contect Form' },
  { label: 'Fully Responsive' },
  { src: Font, alt: 'Logo 3', href: 'https://fonts.google.com/', label: 'Google Fonts' },
  { label: 'Speed Optmized' },
  { label: 'Well Documented' },
  { label: 'Free Updated' },
  { label: '24/7 Support' },

  
];

const LogoBox = ({ src, alt, href, label }) => (
  <Box component="a" href={href} sx={{
    width: '120px', height: '120px', backgroundColor: '#312f2e', margin: '10px', 
    display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
    textAlign: 'center', textDecoration: 'none'
  }}>
    <Box component="img" src={src} alt={alt} sx={{ width: '60px', height: '60px' }} />
    <Typography sx={{ marginTop: '10px', color: 'white' }}>{label}</Typography>
  </Box>
);

function SectionEight() {
  return (
    <>
      <Box sx={{ backgroundColor: 'black', padding: '20px', marginBottom: '20%' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
          Quik Getting Started
        </Typography>
        <Typography variant="h2" sx={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
          Our Core Feature
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px', justifyContent: 'center' }}>
          {logos.map((logo, index) => (
            <LogoBox key={index} {...logo} />
          ))}
        </Box>
      </Box>
     
    </>
  );
}

export default SectionEight;