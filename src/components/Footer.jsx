import React from "react";
import "../css/Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© {year} Vaibhav Garad. All rights reserved.</p>

        {/* Profile Viewer / Visitor Badge */}
        <div className="footer-profile-viewer" style={{
          display: 'inline-block',
          margin: '8px 0',
          padding: '4px 10px',
          borderRadius: '12px'
        }}>
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=vaibhav-1278.portfolio"
            alt="Profile Views"
            style={{
              borderRadius: '12px',
              height: '24px'
            }}
          />
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <NavLink to="/" className="footer-link">Home</NavLink>
          <NavLink to="/about" className="footer-link">About</NavLink>
          <NavLink to="/skills" className="footer-link">Skills</NavLink>
          <NavLink to="/education" className="footer-link">Education</NavLink>
          <NavLink to="/projects" className="footer-link">Projects</NavLink>
          <NavLink to="/Contact" className="footer-link">Contact</NavLink>
        </div>
      </div>
    </footer>
  );
}