import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css';

// TODO: make button animated
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="title">
          <NavHashLink smooth to="#home">
            zihang
          </NavHashLink>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavHashLink smooth to="#home">
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#experience">
                Experience
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#stack">
                Tech Stack
              </NavHashLink>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <button
            className="button"
            onClick={() => {
              window.location.href = 'mailto:zihang.lee@gmail.com';
            }}
          >
            Let's talk!
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
