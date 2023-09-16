import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className='home vh-100'>
      <NavBar />
      <div className='main-section'>
        <div className='container cont-main'>
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='container button-home'>
          <button className='btn-home'>EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
