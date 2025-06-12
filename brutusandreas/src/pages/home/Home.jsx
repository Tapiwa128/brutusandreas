import React from "react";
import "./Home.css"; 
import TopHeader from "../../components/TopHeader/TopHeader";
import Showcase from "../../components/Showcase";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Showcase />
      <main>
        <h1>Welcome to Brutus Andreas Home Page</h1>
        <p>
          This is some dummy content for your homepage. You can customize this section with your own information, images, or components.
        </p>
        <div>
          Dummy Box: Add your featured content here!
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;