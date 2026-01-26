import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Eco-Earn',
      description: 'Developed the Eco-Earn platform, effectively communicating AI-powered features and incentivized recycling processes, increasing user engagement by 40%. Crafted and optimized website copy and UI text, ensuring clarity and compelling messaging. Integrated AI and Machine Learning (ML) for enhanced user experience.',
      link: 'https://github.com/shivamupadhyay05/eco-earn'
    },
    {
      title: 'Pawlytics',
      description: 'Pawlytics — Web Platform GitHub • Developed a responsive web platform connecting pet owners with local shopkeepers. • Built role-based dashboards for customers and shopkeepers. • Implemented full CRUD functionality for products and user profiles. • Ensured mobile responsiveness and cross-browser compatibility.',
      link: 'https://github.com/shivamupadhyay05/PAWLYTICS'
    }
  ];

  return (
    <div className="bento-card projects-card" id="projects">
      <div className="projects-header">
        <h3>Projects</h3>
        <i className="fas fa-folder-open" style={{ color: 'var(--accent-secondary)' }}></i>
      </div>
      <div className="projects-grid-mini">
        {projects.map((project, index) => (
          <div className="project-mini-card" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;