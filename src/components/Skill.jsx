import React from "react";
import "../css/Skill.css";

import {
FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
FaNodeJs, FaPhp, FaGithub, FaTools
} from "react-icons/fa";

import {
SiMysql, SiMongodb, SiCodeigniter, SiExpress,
SiVercel, SiNetlify, SiPostman
} from "react-icons/si";

export default function Skill() {

const skills = [

{
title:"Frontend",
icon:"</>",
items:[
{name:"HTML", icon:<FaHtml5 color="#e34c26"/>},
{name:"CSS", icon:<FaCss3Alt color="#264de4"/>},
{name:"JavaScript", icon:<FaJs color="#f7df1e"/>},
{name:"React", icon:<FaReact color="#61dbfb"/>},
{name:"Bootstrap", icon:<FaBootstrap color="#7952b3"/>}
]
},

{
title:"Backend & Database",
icon:"🗄️",
items:[
{name:"PHP", icon:<FaPhp color="#777bb4"/>},
{name:"Node.js", icon:<FaNodeJs color="#3c873a"/>},
{name:"Express", icon:<SiExpress/>},
{name:"CodeIgniter", icon:<SiCodeigniter color="#ee4323"/>},
{name:"MySQL", icon:<SiMysql color="#00758f"/>},
{name:"MongoDB", icon:<SiMongodb color="#47A248"/>}
]
},

{
title:"Tools & DevOps",
icon:<FaTools/>,
items:[
{name:"GitHub", icon:<FaGithub/>},
{name:"Vercel", icon:<SiVercel/>},
{name:"Netlify", icon:<SiNetlify color="#00C7B7"/>},
{name:"Postman", icon:<SiPostman color="#ff6c37"/>}
]
}

];

const techStack = [
<FaReact color="#61dbfb"/>,
<FaNodeJs color="#3c873a"/>,
<SiMysql color="#00758f"/>,
<SiMongodb color="#47A248"/>,
<FaJs color="#f7df1e"/>,
<FaHtml5 color="#e34c26"/>,
<FaCss3Alt color="#264de4"/>,
<FaBootstrap color="#7952b3"/>
];

return (

<section className="skills-section">

<div className="container">

<h2 className="skills-title">
Skills & Technologies
        <div className="title-line"></div>

</h2>

<div className="row">

{skills.map((section,index)=>(

<div className="col-lg-4 col-md-6 mb-4" key={index}>

<div className="skill-card">

<h4 className="card-heading">

<span className="heading-icon">
{section.icon}
</span>

{section.title}

</h4>

<div className="skill-badges">

{section.items.map((skill,i)=>(

<div className="skill-badge" key={i}>

<span className="badge-icon">
{skill.icon}
</span>

{skill.name}

</div>

))}

</div>

</div>

</div>

))}

</div>

{/* Auto Scrolling Tech Stack */}

<div className="tech-scroll">

<div className="scroll-track">

{techStack.map((icon,index)=>(
<span key={index}>{icon}</span>
))}

{techStack.map((icon,index)=>(
<span key={"dup"+index}>{icon}</span>
))}

</div>

</div>

</div>

</section>

);

}