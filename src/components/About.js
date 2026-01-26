import React from 'react';
import './About.css';
import myPhoto from '../assets/shivam.jpg.png';

const About = () => {
  return (
    <div className="bento-card about-card" id="about">
      <div className="about-header">
        <img 
          src={myPhoto} 
          alt="Shivam Upadhyay" 
          className="about-avatar"
        />
        <div className="about-title-group">
          <h1>Shivam Upadhyay</h1>
          <h2>B.Tech CSE @ Bennett University (2027)</h2>
        </div>
      </div>
      
      <div className="about-bio">
        <p>
          Community Facilitator Lead | Content Head | Developer. 
          Passionate about building seamless digital experiences and turning complex problems into elegant solutions.
        </p>
        <div className="about-edu" style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <strong>Education:</strong><br/>
          B.Tech in Computer Science, Bennett University – 7.85 CGPA (May 2027)<br/>
          Kendriya Vidyalaya Old Cantt, CBSE – 91% & 80% (March 2023)
        </div>
      </div>

      <div className="about-socials">
        <a href="https://github.com/shivamupadhyay05" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/shivam-upadhyay-34666b277/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="mailto:Shivamu0504@gmail.com" className="social-btn" aria-label="Email"><i className="fas fa-envelope"></i></a>
        <a href="tel:+916390533255" className="social-btn" aria-label="Phone"><i className="fas fa-phone"></i></a>
      </div>

      <div className="about-resume">
        <a href="/resume.pdf" className="resume-btn" download>
          <i className="fas fa-download" aria-hidden="true"></i>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default About;