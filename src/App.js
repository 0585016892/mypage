import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/HeroSection.css'
import './assets/Navbar.css'
import './assets/About.css'
import './assets/Skills.css'
import './assets/Contact.css'
import './assets/Projects.css'
import './assets/Footer.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
