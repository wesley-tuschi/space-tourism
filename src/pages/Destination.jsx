import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Destination.css";
import destinationData from "../data.json";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("Moon");

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet(planetName);
  };

  const planetInfo = destinationData.destinations.find(
    (destination) => destination.name === selectedPlanet
  );

  console.log(planetInfo);

  return (
    <div className='destination vh-100'>
      <NavBar />
      <div className='container text-center row g-0 text-center'>
        <div className='col-sm-6 .col-md-8'>
          <h2>
            <span>01</span> PICK YOUR DESTINATION
          </h2>
          {planetInfo && (
            <img
              src={require(`../${planetInfo.images.png}`)}
              alt={planetInfo.name}
              className="img-fluid"
            />
          )}
        </div>
        <div className='col-6 .col-md-4 infos'>
          {destinationData.destinations.map((destination, index) => (
            <span className="planets-names"
              key={index}
              onClick={() => handlePlanetClick(destination.name)}
            >
              {destination.name}
            </span>
          ))}
          {planetInfo && (
            <div>
              <h1>{planetInfo.name}</h1>
              <p className="description">{planetInfo.description}</p>
              <div className='line-down'></div>
              <div className='row row-cols-2 text-center infos'>
                <h3 className='col'>AVG. DISTANCE</h3>
                <h3 className='col'>EST. TRAVEL TIME</h3>
                <p className='col dates'>{planetInfo.distance}</p>
                <p className='col dates'>{planetInfo.travel}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
