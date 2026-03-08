import React from "react";
import "../css/Education.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function Education() {

const education = [
{
icon: <FaGraduationCap />,
title: "Bachelor of Computer Science (BCS)",
institute: "New Arts, Commerce and Science College, Ahilyanagar",
year: "Pune University - 2023 - 2026 (Persuing)",
desc: "Comprehensive study of advanced software engineering, algorithm design, database systems, and object-oriented programming. Developed expertise in modern development practices and software architecture principles."
},

{
icon: <FaLaptopCode />,
title: "Full Stack Web Developer",
institute: "Self Learning & Online Platforms",
year: "2024 - Present",
desc: "Intensive professional training in React, Node.js, Express, and MongoDB. Mastered full-stack development workflows, API design, and modern deployment strategies for building production-ready web applications."
}

];

return (

<section className="education-section">

<div className="container">

<div className="education-title text-center">

<h2>Education
            <div className="title-line"></div>

</h2>

<p>
My academic background and development journey
</p>

</div>

<div className="timeline">

{education.map((item,index)=>(

<div className="timeline-item" key={index}>

<div className="timeline-icon">
{item.icon}
</div>

<div className="timeline-content">

<h4>{item.title}</h4>

<h6 className="institute">
{item.institute}
</h6>

<span className="year">
{item.year}
</span>

<p>
{item.desc}
</p>

</div>

</div>

))}

</div>

</div>

</section>

);

}