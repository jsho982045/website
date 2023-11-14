import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-item">
        <span className="dash">&mdash;</span>
        <p>Software Engineer</p>
      </div>
      <div className="about-item">
        <span className="dash">&mdash;</span>
        <p>Computer Science Student</p>
        </div>
    <div className="about-item">
        <span className="dash">&mdash;</span>
         <p>Teacher</p>
        </div>
    </section>
  );
}

export default About;
