import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home'; // Create a Home component for the landing page
import ParticlesBackground from './components/ParticlesBackground'; // Create a ParticlesBackground component for the particles effect
import ComputerScienceStudent from './components/ComputerScienceStudent'; // Create a ComputerScienceStudent component for the Computer Science Student page
import Teacher from './components/Teacher'; // Create a Teacher component for the Teacher page
import SoftwareEngineer from './components/SoftwareEngineer'; // Create a SoftwareEngineer component for the Software Engineer page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ParticlesBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/computer-science-student" element={<ComputerScienceStudent />} />
          <Route path="/about/teacher" element={<Teacher />} />
          <Route path="/about/software-engineer" element={<SoftwareEngineer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
