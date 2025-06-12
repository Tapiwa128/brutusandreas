import React from "react";
import "./Home.css"; 
import TopHeader from "../../components/TopHeader/TopHeader";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicePage from "../../components/ServicePage/ServicePage";
import Showcase from "../../components/Showcase/Showcase";
import CallToAction from "../../components/CallToAction/CallToAction";


const Home = () => {
  return (
    <div>
      <TopHeader/>
           <AboutSection/>
           <ServicePage/>
        <Showcase/>
        <CallToAction/>
        
     
    </div>
  );
};

export default Home;