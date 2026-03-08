import React from "react";
import "../css/Project.css";

export default function Projects(){

const projects=[

{
title:"Job Portal System",
category:"Web Application",
image:"/src/assets/jobportal.png",
description:"A complete job portal platform where employers can create company profiles, post jobs and manage applications. Candidates can browse jobs from different companies and apply. Employers can shortlist or reject candidates and shortlisted candidates receive automated email notifications.",
tech:["Node.js","Express.js","MySQL","Nodemailer"],
link:"#",
github:"#"
},

{
title:"Hospital Management System",
category:"Web Application",
image:"src/assets/hospital.png",
description:"A hospital platform where hospitals can register and create profiles. Patients can browse hospitals, view doctor details and book appointments based on available time slots. Online consultation features are included.",
tech:["Node.js","Express.js","MySQL"],
link:"#",
github:"#"

},

{
title:"Hotel Management System",
category:"Web Application",
image:"src/assets/hotel.png",
description:"QR based digital menu system where customers scan table QR to view menu and place orders. Orders appear in the kitchen dashboard table-wise. Admin dashboard automatically generates bills for each table.",
tech:["PHP","CodeIgniter","MySQL","Bootstrap","Qr Code Generator"],
link:"#",
github:"#"
},

{
title:"Developer Portfolio Website",
category:"Portfolio",
image:"src/assets/portfolio.png",
description:"A modern developer portfolio showcasing skills, projects, education and experience. Includes dark mode, animated sections and contact form with email integration.",
tech:["React.js","Node.js","Express.js","MailJs","MySQL"],
link:"#",
github:"https://github.com/vaibhav-1278/My_portfolio.git"
}

];

return(

<section className="projects-section">

<div className="container">

<h2 className="projects-title">

My Projects
        <div className="title-line"></div>

</h2>

<div className="row">

{projects.map((project,index)=>(

<div className="col-lg-4 col-md-6 mb-4" key={index}>

<div className="project-card">

<img
src={project.image}
alt={project.title}
className="project-img"
/>

<div className="project-body">

<span className="project-badge">
{project.category}
</span>

<h4>{project.title}</h4>

<p>{project.description}</p>

<div className="project-tech">

{project.tech.map((tech,i)=>(
<span key={i}>{tech}</span>
))}

</div>

<div className="project-buttons">

<a
href={project.link}
className="live-btn"
target="_blank"
rel="noreferrer"
>

<i className="fa-solid fa-arrow-up-right-from-square"></i> Live View

</a>

<a
href={project.github}
className="github-btn"
target="_blank"
rel="noreferrer"
>

<i className="fab fa-github"></i>

</a>

</div>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}