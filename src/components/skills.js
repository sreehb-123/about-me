import React from "react";
import "./skills.css"
import c_logo from "../images/c_logo-removebg-preview.png"
import js_logo from "../images/js_logo-removebg-preview.png"
import py_logo from "../images/python_logo-removebg-preview.png"
import html_logo from "../images/html_logo_alt-removebg-preview.png"
import css_logo from "../images/css_logo_alt-removebg-preview.png"
import react_logo from "../images/react_logo-removebg-preview.png"
import nodejs_logo from "../images/nodejs_logo-removebg-preview.png"
import exp_logo from "../images/express_log-removebg-preview.png"
import mongodb_logo from "../images/mongodb_logo-removebg-preview.png"

export default function Skills() {
    return(
        <div className="skills-container">
            <h1>My skills</h1>
            
            <h2>Programming Languages and Frameworks</h2>
            <div className="skills-grid">
                <div className="grid-item">
                    <img src={c_logo} alt="C Language"/>
                    <span>C Language</span>
                </div>
                <div className="grid-item">
                    <img src={py_logo} alt="Python"/>
                    <span>Python</span>
                </div>
                <div className="grid-item">
                    <img src={js_logo} alt="JavaScript"/>
                    <span>JavaScript</span>
                </div>
                <div className="grid-item">
                    <img src={html_logo} alt="HTML"/>
                    <span>HTML</span>
                </div>
                <div className="grid-item">
                    <img src={css_logo} alt="CSS"/>
                    <span>CSS</span>
                </div>
                <div className="grid-item">
                    <img src={react_logo} alt="React"/>
                    <span>React</span>
                </div>
                <div className="grid-item">
                    <img src={nodejs_logo} alt="Node.js"/>
                    <span>Node.js</span>
                </div>
                <div className="grid-item">
                    <img src={exp_logo} alt="Express"/>
                    <span>Express</span>
                </div>
                <div className="grid-item">
                    <img src={mongodb_logo} alt="MongoDB"/>
                    <span>MongoDB</span>
                </div>
            </div>

            <div className="activities">
                <h2>Soft Skills</h2>
                <ul>
                    <li>Problem Solving</li>
                    <li>Creative Thinking</li>
                    <li>Team Collaboration</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                    <li>Critical Thinking</li>
                    <li>Bas chatgpt ne itna hi bola tha</li>
                </ul>
            </div>

            <h1>Projects</h1>
            
            <div className="projects-row">
                <div className="project-coloumn">
                    <h2>Using MERN Stack</h2>
                    <ul>
                        <li>Library Management System for SoI-2024</li>
                    </ul>
                </div>

                <div className="project-coloumn">
                    <h2>Using React</h2>
                    <ul>
                        <li>Digital Business Card</li>
                        <li>Random Cat Generator</li>
                        <li>*The one you are seeing rn*</li>
                    </ul>   
                </div>

                <div className="project-coloumn">
                    <h2>Using JS,HTML & CSS</h2>
                    <ul>
                        <li>Tic-Tac-Toe</li>
                        <li>Rock Paper Scissors</li>
                        <li>Currency Converter</li>
                    </ul>
                </div>
            </div>

            <div className="activities">
                <h1>Extra Curricular Activities</h1>
                    <ul>
                        <li>Served as a Mentor for the Python Workshop conducted by our Coding Club</li>
                        <li>Has been a CDC Member of the PR Team at IIT Dharwad</li>
                        <li>Iam the roomate of Coding Club Jr.Sec. SRIHARI</li>
                    </ul>
            </div>

        </div>
    );
}