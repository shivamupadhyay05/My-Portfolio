import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: '🔤' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '✨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '⏭️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
    { name: 'C++', icon: '➕' },
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'QA Testing', icon: '🧪' },
  ];

  const softSkills = [
    'Project Management', 'Leadership', 'Communication', 
    'Problem Solving', 'Teamwork', 'Time Management'
  ];

  return (
    <div className="bento-card skills-card" id="skills">
      <div className="skills-header">
        <h3>Skills & Technologies</h3>
        <i className="fas fa-code" style={{ color: 'var(--accent-primary)' }}></i>
      </div>
      
      <div className="skills-section-inner">
        <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', marginBottom: '10px' }}>Technical</h4>
        <div className="skills-list">
          {technicalSkills.map((skill) => (
            <div className="skill-pill" key={skill.name}>
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        
        <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', margin: '20px 0 10px 0' }}>Professional</h4>
        <div className="skills-list">
          {softSkills.map((skill) => (
            <div className="skill-pill" key={skill} style={{ borderColor: 'var(--accent-secondary)' }}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;