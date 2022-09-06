import React from 'react';
import Poseidon from '../../assets/poseidon';
import './Home.css';

function Home() {
  return (
    <>
      <div className="primary-container" id="home">
        <div className="text-container">
          <p className="level1">Hi,</p>
          <div className="name-container">
            <p className="level1">My name is </p>
            <p className="name">Zi Hang.</p>
          </div>
          <div className="subtitle-container">
            <p className="level2">
              I'm a full-stack developer interested in all things tech.
            </p>
          </div>
          <div className="button-container">
            <button
              className="button"
              onClick={() => {
                window.location.href = 'mailto:zihang.lee@gmail.com';
              }}
            >
              Hit me up!
            </button>
          </div>
        </div>
        <div className="image-container">
          <Poseidon />
        </div>
      </div>
    </>
  );
}

export default Home;
