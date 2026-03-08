import React, { useState, useEffect } from "react";
import "../css/Home.css";
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";
import Projects from "./Projects";

export default function Home() {

  /* ===== Subtitle Typing ===== */

  const subtitleList = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Freelancer"
  ];

  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {

    const interval2 = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitleList.length);
    }, 2500);

    return () => clearInterval(interval2);

  }, []);


  /* ===== Expertise Typing ===== */

  const expertiseList = [
    "API Design and Integration",
    "Scalable Backend Systems",
    "Performance Optimization",
    "Gen AI Integration",
    "JavaScript ES6+",
    "Database Design & Management",
    "Cloud Deployment & DevOps",
    "Version Control with Git",
    "Testing & Debugging"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % expertiseList.length);
    }, 2000);

    return () => clearInterval(interval);

  }, []);


  return (
    <>
      <section className="hero-section container">

        <div className="row align-items-center">

          {/* LEFT SIDE */}

          <div className="col-lg-6 hero-left">

            <h2 className="hero-title">
              <span>Hi, I’m Vaibhav</span>
            </h2>

            {/* Subtitle Typing */}

            <h3 className="hero-subtitle">
              <span key={subtitleIndex} className="type typing">
                {subtitleList[subtitleIndex]}
              </span>
            </h3>


            <p className="hero-desc">
              A passionate Full Stack Developer specializing in creating modern,
              responsive, and user-friendly web applications. I transform ideas
              into digital experiences that drive business growth.
            </p>


            {/* ===== Expertise Section ===== */}

            <div className="hero-expertise">

              <div className="expertise-icon">
                Expertise:
              </div>

              <p className="expertise-text">
                <span className="check">🚀</span>

                <span key={index} className="type typing">
                  {expertiseList[index]}
                </span>
              </p>

            </div>


            {/* Buttons */}

            <div className="hero-buttons">

              <button className="btn hero-btn-primary" onClick={() => window.location.href = '/projects'}>
                View My Projects →
              </button>

              <button className="btn hero-btn-outline" onClick={() => window.location.href = '/contact'}>
                Get In Touch
              </button>

            </div>

{/* Social Links */}

<div className="hero-social">

  <a href="https://github.com/vaibhav-1278" target="_blank">
    <i className="fab fa-github"></i>
  </a>

  <a href="https://www.linkedin.com/in/vaibhav-garad-10073532b/" target="_blank">
    <i className="fab fa-linkedin"></i>
  </a>

<a href="mailto:vaibhavgarad556@gmail.com">
  <i className="fas fa-envelope"></i>
</a>
</div>
          </div>


          {/* RIGHT SIDE IMAGE */}

          <div className="col-lg-6 text-center hero-right">

            <div className="hero-img-wrapper">

              <img
                src="/src/assets/profile_photo.jpg"
                alt="profile"
                className="hero-img"
              />

            </div>

          
          </div>

        </div>

      </section>
      <About />
      <Education/>
      <Skill />
      <Projects />
    </>
  );
}