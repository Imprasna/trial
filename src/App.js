import React from 'react';
import './App.css';
import Navbar from './components/header';
import Hero from './components/hero';
import AboutSection from './components/about-section';
import What from './components/whatIDo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      < What />
    </div>
  );
}

export default App;
