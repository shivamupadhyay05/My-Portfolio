import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Developer and tester engineer",
      company: "NyneOS Technologies Private Limited",
      period: "March 2026 - June 2026",
      description:
        "Contributed to software development tasks, collaborated with the engineering team to build features, and gained hands-on experience in real-world product delivery.",
    },
  ];

  const activities = [
    {
      role: "Community Facilitator Lead",
      company: "Google Developers Group",
      period: "Aug 2024 - Aug 2025",
      description:
        "Spearheaded content-driven community initiatives, increasing event attendance by 30% and fostering active participation. Managed content creation and distribution for Google events.",
    },
    {
      role: "Content Head",
      company: "Alan Turing Club",
      period: "Aug 2024 - Aug 2025",
      description:
        "Directed content creation efforts, training junior content writers on content strategy and CMS. Provided leadership in content management.",
    },
    {
      role: "Content Team Member",
      company: "Alan Turing Club",
      period: "Aug 2023 - Aug 2024",
      description:
        "Gained experience in content creation, SEO, and content distribution by contributing to various content projects.",
    },
    {
      role: "Content Team Member",
      company: "Quantum Computing Club",
      period: "Aug 2023 - Aug 2024",
      description:
        "Collaborated with senior team members to learn about technical content writing, contributing to clarity and accuracy in technical writing.",
    },
  ];

  return (
    <>
      <div className="bento-card experience-card" id="experience">
        <div className="experience-header">
          <h3>Experience</h3>
          <i
            className="fas fa-briefcase"
            style={{ color: "var(--accent-primary)" }}
          ></i>
        </div>
        <div className="timeline-mini">
          {experiences.map((exp, index) => (
            <div className="timeline-item-mini" key={index}>
              <div className="timeline-dot-mini"></div>
              <div className="timeline-content-mini">
                <h4>{exp.role}</h4>
                <span>
                  {exp.company} | {exp.period}
                </span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bento-card activities-card">
        <div className="experience-header">
          <h3>Activities and Co-curricular</h3>
          <i
            className="fas fa-star"
            style={{ color: "var(--accent-primary)" }}
          ></i>
        </div>
        <div className="timeline-mini">
          {activities.map((activity, index) => (
            <div className="timeline-item-mini" key={index}>
              <div className="timeline-dot-mini"></div>
              <div className="timeline-content-mini">
                <h4>{activity.role}</h4>
                <span>
                  {activity.company} | {activity.period}
                </span>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
