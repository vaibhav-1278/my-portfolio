import React from "react";
import "../css/About.css";
export default function About() {
  return (
    <>
    <section className="about-section container">

      <div className="about-title">
        <h2>About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-6 about-left">
          <img
            src="\src\assets\about.png"
            alt="about"
            className="about-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6 about-right">

          <h3 className="about-heading">
            Full Stack Developer
          </h3>

          <p className="about-desc">
            Full Stack Developer with experience in designing dynamic,
            responsive web applications and interactive features.
            Skilled in both front-end and back-end technologies with
            strong problem-solving ability.
          </p>

          <p className="about-desc">
            Passionate about learning modern tools like React, Node.js
            and cloud technologies to build scalable web applications.
          </p>

          {/* INFO GRID */}

          <div className="about-info">

            <div className="info-item">
              📍 Pune, Maharashtra
            </div>

            <div className="info-item">
              📞 +917083491278
            </div>

            <div className="info-item">
              ✉ vaibhavgarad556@gmail.com
            </div>

            <div className="info-item">
              💼 1+ Years Experience
            </div>

          </div>

        </div>

      </div>

    </section>
    </>
  );
}