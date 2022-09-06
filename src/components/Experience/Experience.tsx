import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <>
      <div className="experience-container" id="experience">
        <p className="experience">WORK EXPERIENCE</p>
        <div className="secondary-container">
          <div className="card">
            <p className="job-title">SYSTEM ADMIN</p>
            <p className="company">Zelcos Laboratory</p>
            <p className="duration">July 2020 - July 2022</p>
          </div>
          <div className="card">
            <p className="job-title">BLOCKCHAIN ENGINEER</p>
            <p className="company">HappyToro</p>
            <p className="duration">July 2022 - Current</p>
          </div>
          <div className="card">
            <p className="job-title">FULL STACK DEVELOPER</p>
            <p className="company">Freelance</p>
            <p className="duration">March 2022 - Current</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
