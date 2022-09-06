import React from 'react';
import './App.css';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Techstack from './components/TechStack/Techstack';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Experience />
      <Techstack />
    </div>
  );
}

export default App;
