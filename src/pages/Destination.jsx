import React from 'react';
import NavBar from '../components/NavBar';
import "../styles/Destination.css";

const Destination = () => {
    return (
        <div className="destination vh-100">
           <NavBar />
        <div className="container">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
      
        <button className="btn">Explore</button>
      </div>
      
    );
}

export default Destination;
