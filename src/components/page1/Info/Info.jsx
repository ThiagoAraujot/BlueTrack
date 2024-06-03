import React from 'react';
import './info.scss';
import lineimg from '../../../assets/Line.png';

const Info = () => {
  return (
    <div className="info-wrapper">
      <img src={lineimg} alt="line" className="info-image" />
     <div className="info-container">
      <h1>01</h1>
      <h2>The first swim</h2>
      <p>
        When sea turtles hatch, their first big challenge is to get to the ocean from the beach. 
        It's a race against time and predators. Once they hit the water, they start what's often 
        called the 'lost years' because they drift far out to sea and aren't easy to track.
      </p>
    </div>
    </div>

  
  );
}

export default Info;
