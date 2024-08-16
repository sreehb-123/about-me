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
import potrait from "../images/harsha.jpg"
import github_logo from "../images/github_logo.png"
import insta_logo from "../images/insta_icon.jpeg"
import twitter_logo from "../images/x_icon.png"
import phone_logo from "../images/phone_logo1.jpeg"
import linkedin_logo from "../images/linkedin_logo.png"
import email_logo from "../images/email_logo.jpeg"
import Navbar from "./navbar";

export default function Skills() {
    return(
        <div className="skills-container">
            <Navbar />

            <section id="about">
                <h1>About</h1>
                
                <div className="about">
                    <p>Hello! I'm Sai Sreeharsha Bolloju, currently in my second year of B.Tech in Computer Science and Engineering.
                    As a passionate and curious learner, I'm diving into the exciting world of web development.
                    My journey so far has been all about exploring the fundamentals, building a strong foundation,
                    and understanding how different pieces of the web puzzle fit together.
                    I'm always eager to learn, adapt, and experiment with new technologies.
                    While I've gained a good grasp of the basics, I'm continuously striving to expand my knowledge
                    and improve my skills.
                    I'm enthusiastic about tackling challenges and finding creative solutions,
                    and I believe that every project is an opportunity to grow and innovate.
                    Whether it's developing responsive designs, optimizing user experiences,
                    or experimenting with the latest trends in web development, 
                    I'm ready to take on whatever comes next and am excited to contribute my skills to real-world applications.</p>
                    <img src={potrait} alt="" height="400" width="400" />
                </div>
            </section>

            <section id="skills">
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
            </section>

            <section id="projects">
                <h1>Projects</h1>
                
                <div className="projects-row">
                    <div className="project-coloumn">
                        <h2>Using MERN Stack</h2>
                        <ul>
                            <li><a href="https://github.com/sreehb-123/9-11/tree/master" target="_blank" rel="noopener noreferrer">Library Management System for SoI-2024</a></li>
                        </ul>
                    </div>

                    <div className="project-coloumn">
                        <h2>Using React</h2>
                        <ul>
                            <li><a href="https://harsha-businesscard.netlify.app" target="_blank" rel="noopener noreferrer">Digital Business Card</a></li>
                            <li><a href="https://randomcat-for-bhavana.netlify.app" target="_blank" rel="noopener noreferrer">Random Cat Generator</a></li>
                            <li>This one lol (Done in less than 24 hrs)</li>
                        </ul>   
                    </div>

                    <div className="project-coloumn">
                        <h2>Using JS,HTML & CSS</h2>
                        <ul>
                            <li><a href="https://sreehb-123.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">Tic-Tac-Toe</a></li>
                            <li><a href="https://scissor-rock-papers.netlify.app" target="_blank" rel="noopener noreferrer">Rock Paper Scissors</a></li>
                            <li><a href="https://exchange-rate-converter-harsha.netlify.app" target="_blank" rel="noopener noreferrer">Currency Converter</a></li>
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

            </section>

            <section id="contacts">

                <h1>Contact Me</h1>

                <div className="contacts-grid">
                    <div className="contacts-item">
                        <a href="https://github.com/sreehb-123" rel="noopener noreferrer" className="github" target="_blank">
                            <img src={github_logo} alt="GitHub"/>
                        </a>
                    </div>
                    <div className="contacts-item">
                        <a href="https://www.linkedin.com/in/bolloju-sai-sreeharsha-a3146a294/" rel="noopener noreferrer" className="linkedin" target="_blank">
                            <img src={linkedin_logo} alt="LinkedIn"/>
                        </a>
                    </div>
                    <div className="contacts-item">
                        <a href="mailto:sreeh190206@gmail.com" rel="noopener noreferrer" target="_blank">
                            <img src={email_logo} alt="Email"/>
                        </a>
                    </div>
                    <div className="contacts-item">
                        <a href="tel:+919391323593" rel="noopener noreferrer" target="_blank">
                            <img src={phone_logo} alt="Phone"/>
                        </a>
                    </div>
                    <div className="contacts-item">
                        <a href="https://x.com/achiever1926" rel="noopener noreferrer" target="_blank">
                            <img src={twitter_logo} alt="Twitter"/>
                        </a>
                    </div>
                    <div className="contacts-item">
                        <a href="https://www.instagram.com/sreehb_123/" rel="noopener noreferrer" className="instagram" target="_blank">
                            <img src={insta_logo} alt="Instagram"/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}