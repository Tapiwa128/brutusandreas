import React from "react";
import "./Home.css"; 
import TopHeader from "../../components/TopHeader/TopHeader";
import AboutSection from "../../components/AboutSection/AboutSection";
import Showcase from "../../components/Showcase/Showcase";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <TopHeader/>
           <AboutSection/>
        <Showcase/>
           <Footer/>
    </div>
  );
};

export default Home;