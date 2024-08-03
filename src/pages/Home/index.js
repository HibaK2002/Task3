import React from "react";
import AppBar from "../../Components/AppBar";
import FirstSection from "../../Components/FirstSection";
import SectionTwo from "../../Components/SectionTwo";
import SectionThree from "../../Components/SectionThree";
import SectionFour from "../../Components/SectionFour";
import SectionFive from "../../Components/SectionFive";
import SectionSix from "../../Components/SectionSix"; 
import SectionSeven from "../../Components/SectionSeven"; 
import SectionEight from "../../Components/SectionEight";
import Footer from "../../Components/Footer"; // Importing Footer component

function Index() {
  return (
    <>
      <AppBar />
      <FirstSection>
        {/* You can add anything to show it inside this component */}
        <h1>Jjjjjjjjjjjjjjj </h1>
      </FirstSection>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer /> {/* Adding Footer component */}
    </>
  );
}

export default Index;
