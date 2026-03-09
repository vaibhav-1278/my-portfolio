import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [lightMode, setLightMode] = useState(true); // start with light mode

  const handleLightMode = () => setLightMode(!lightMode);

  // Apply body classes based on mode
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <div className="row w-100 align-items-center">

          {/* Logo */}
          <div className="col-6 col-md-3">
            <a className="navbar-brand fw-bold" href="#">
              <span style={{ fontSize: '24px', color: '#0f13fa' }}>{'\u003C\u003E'}</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="col-md-6 d-none d-md-block">
            <ul className="navbar-nav d-flex flex-row justify-content-center">
              <Link className="nav-link nav-item mx-2" to="/">Home</Link>
              <Link className="nav-link nav-item mx-2" to='/about'>About</Link>
              <Link className="nav-link nav-item mx-2" to='/education'>Education</Link>
              <Link className="nav-link nav-item mx-2" to='/skills'>Skills</Link>
              <Link className="nav-link nav-item mx-2" to='/projects'>Projects</Link>
              <Link className="nav-link nav-item mx-2" to='/contact'>Contact</Link>
            </ul>
          </div>

          {/* Right Side Buttons */}
          <div className="col-6 col-md-3 d-flex justify-content-end align-items-center">
            <div className="d-flex gap-2">

              {/* Light/Dark Mode Toggle */}
              <button
                className="btn btn-outline-info d-flex align-items-center justify-content-center"
                onClick={handleLightMode}
                title="Toggle Light/Dark Mode"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '25%',
                  border: lightMode ? '1px solid #e0e0e0' : '1px solid #444',
                  background: lightMode ? '#F0F2F4' : '#0e0e0e',
                  color: lightMode ? '#201e1e' : '#ffd700',
                  fontSize: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                {lightMode ? "☀︎" : "☽"}
              </button>

              {/* Download Resume */}
              <a
                href="\src\assets\vg-resume..pdf"
                download
                className="btn btn-sm d-flex align-items-center justify-content-center btn-outline-info"
                title="Download Resume"
                style={{
                  width: '90px',
                  height: '37px',
                  border: lightMode ? '1px solid #464444' : '2px solid #686767',
                  color: lightMode ? '#555' : '#ffd700',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  padding: '0 10px',
                  gap: '8px'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={lightMode ? 'black' : 'white'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                resume
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/vaibhav-1278"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm d-flex align-items-center justify-content-center btn"
                title="GitHub"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '25%',
                  background: lightMode ? '#fcfdfe' : '#2d2d2d',
                  border: lightMode ? 'none' : '1px solid #444',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdGh1YiBoLTUgdy01IHRleHQtZm9yZWdyb3VuZC83MCBob3Zlcjp0ZXh0LWZvcmVncm91bmQiPjxwYXRoIGQ9Ik0xNSAyMnYtNGE0LjggNC44IDAgMCAwLTEtMy41YzMgMCA2LTIgNi01LjUuMDgtMS4yNS0uMjctMi40OC0xLTMuNS4yOC0xLjE1LjI4LTIuMzUgMC0zLjUgMCAwLTEgMC0zIDEuNS0yLjY0LS41LTUuMzYtLjUtOCAwQzYgMiA1IDIgNSAyYy0uMyAxLjE1LS4zIDIuMzUgMCAzLjVBNS40MDMgNS40MDMgMCAwIDAgNCA5YzAgMy41IDMgNS41IDYgNS41LS4zOS40OS0uNjggMS4wNS0uODUgMS42NS0uMTcuNi0uMjIgMS4yMy0uMTUgMS44NXY0Ij48L3BhdGg+PHBhdGggZD0iTTkgMThjLTQuNTEgMi01LTItNy0yIj48L3BhdGg+PC9zdmc+"
                  alt="GitHub"
                  style={{
                    width: '20px',
                    height: '20px',
                    filter: lightMode ? 'none' : 'brightness(0) invert(1)'
                  }}
                />
              </a>

            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;