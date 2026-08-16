import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "ExpanseFLOW",
      description:
        " A ",
      link: "https://github.com/shivamupadhyay05/ExpanseFLOW",
    },
    {
      title: "HealthNudge-AI",
      description:
        "HealthNudge is a full-stack platform designed to help users manage their health using AI-driven tools. It allows secure upload of medical reports (PDF/image) and uses a hybrid parsing approach (OCR + text extraction) to generate summaries. Users receive personalized veg/non-veg diet plans, can track progress on a dynamic dashboard, and benefit from an accessibility-first Text-to-Speech feature that reads reports aloud".
      link:"https://github.com/shivamupadhyay05/HealthNudge-AI"
    };
  ];

  return (
    <div className="bento-card projects-card" id="projects">
      <div className="projects-header">
        <h3>Projects</h3>
        <i
          className="fas fa-folder-open"
          style={{ color: "var(--accent-secondary)" }}
        ></i>
      </div>
      <div className="projects-grid-mini">
        {projects.map((project, index) => (
          <div className="project-mini-card" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
