import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import LandingSection1 from './components/LandingSection1';
import LandingSection2 from './components/LandingSection2';
import LandingSection3 from './components/LandingSection3';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
