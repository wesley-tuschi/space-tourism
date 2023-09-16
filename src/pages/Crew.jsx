import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import crewData from "../data.json";
import "../styles/Crew.css";

const Crew = () => {
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setSelectedCrewIndex(
        (prevIndex) => (prevIndex + 1) % crewData.crew.length
      );
      setExiting(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [selectedCrewIndex]);

  const handleCrewClick = (index) => {
    setSelectedCrewIndex(index);
  };

  const crewInfo = crewData.crew[selectedCrewIndex];

  console.log(crewInfo);

  return (
    <div className='crew vh-100'>
      <NavBar />
      <div className='container text-center row g-0 text-center'>
        <h1>
          <span>02</span> MEET YOUR CREW
        </h1>
        <div className='col-sm-6 .col-md-8'>
          <div
            className={`crew-container ${exiting ? "crew-container-exit" : ""}`}
          >
            <h3>{crewInfo.role}</h3>
            <h2>{crewInfo.name}</h2>
            <p>{crewInfo.bio}</p>
          </div>
          <div className='carousel-buttons car-buts-cre'>
            {crewData.crew.map((crewMember, index) => (
              <button
                className={`carousel-button car-but-cre ${
                  index === selectedCrewIndex ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleCrewClick(index)}
                aria-label={`Select crew member ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className='col-6 .col-md-4 picture'>
          {crewInfo && (
            <img
              src={require(`../${crewInfo.images.png}`)}
              alt={crewInfo.name}
              className='img-fluid rounded float-end crew-img'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Crew;
