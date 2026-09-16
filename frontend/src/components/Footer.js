import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bento-card footer-card-bento" id="contact">
      <div className="footer-content">
        <h3>Let's Work Together</h3>
        <p>
          Feel free to reach out to me for any inquiries or collaboration
          opportunities.
        </p>
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
          }}
        >
          <p style={{ margin: "5px 0" }}>📧 Shivamu0504@gmail.com</p>
          <p style={{ margin: "5px 0" }}>📞 +91-6390533255</p>
          <p style={{ margin: "5px 0" }}>
            💻 Codolio:{" "}
            <a
              href="https://codolio.com/profile/ShivamUpadhyay"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              shivam upadhyay
            </a>
          </p>
        </div>
        <a href="mailto:Shivamu0504@gmail.com" className="footer-btn">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Footer;
