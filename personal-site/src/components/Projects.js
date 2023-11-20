import React from 'react';
import '../styles/Projects.css'; // We will create this CSS file next.

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="calculator">
      <span className="dash">&mdash;</span>
      <a href="https://jsho982045.github.io/Calculator/">Calculator</a>
      </div>
      <div className="todolist">
      <span className="dash">&mdash;</span>
      < a href="https://jsho982045.github.io/To-Do-List/">To Do List</a>
      </div>
      {/* Add individual project cards or items here */}
    </section>
  );
}

export default Projects;
