import React from "react";
import "./Home.css"; 
import TopHeader from "../../components/TopHeader/TopHeader";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicePage from "../../components/ServicePage/ServicePage";
import Showcase from "../../components/Showcase/Showcase";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <TopHeader/>
           <AboutSection/>
           <ServicePage/>
        <Showcase/>
        
           <Footer/>
    </div>
  );
};

export default Home;