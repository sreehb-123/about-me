import React from "react";
import "./skills.css"
import "./home.css"
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
import bash_logo from "../images/bash-removebg-preview.png"
import Navbar from "./navbar";

export default function Skills() {
    return(
        <div className="skills-container">
            <Navbar />
            <section id="resume">
                <h1>Bolloju Sai Sreeharsha</h1>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '40px'}}>
                    <div style={{textAlign: 'left'}}>
                        <p><strong>Email:</strong> <a href="mailto:sreeh190206@gmail.com">sreeh190206@gmail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+919391323593">+91-9391323593</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/sreehb-123" target="_blank" rel="noopener noreferrer">github.com/sreehb-123</a></p>
                        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bolloju-sai-sreeharsha-a3146a294/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bolloju-sai-sreeharsha</a></p>
                        <p><a href="/SaiSreeharshaResume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">Download Resume (PDF)</a></p>
                    </div>
                    <img src={potrait} alt="Portrait" height="180" width="180" style={{borderRadius: '8px'}} />
                </div>
            </section>

            <section id="about">
                <h2>Summary</h2>
                <p style={{maxWidth: 900, margin: '0 auto', color: '#d3d3d3', fontFamily: 'monospace'}}>
                    I am a software developer and third-year B.Tech student (CSE) at IIT Dharwad (CGPA: 8.50).
                    I build web and backend systems, and have experience with AWS, CI/CD, and monitoring tooling.
                    I enjoy designing scalable backends and developer workflows that automate reliability and observability.
                </p>
            </section>

            <section id="education">
                <h2>Education</h2>
                <div className="project-coloumn" style={{maxWidth:800, margin:'0 auto', textAlign:'left'}}>
                    <h3>B.Tech, Computer Science and Engineering</h3>
                    <p>Indian Institute of Technology, Dharwad — CGPA: 8.50</p>
                    <p>2023 — 2027</p>
                </div>
            </section>

            <section id="experience">
                <h2>Experience</h2>
                <div className="project-coloumn" style={{maxWidth:900, margin:'0 auto', textAlign:'left'}}>
                    <h3>Software Development Engineer Intern — Siemens</h3>
                    <p><em>July — Dec 2026</em></p>
                    <ul>
                        <li>Developed an automated pipeline to identify missing Datadog monitors across AWS resources and generate reports highlighting monitoring gaps.</li>
                        <li>Automated Jira ticket creation for detected monitoring gaps, enabling systematic tracking and remediation.</li>
                        <li>Implemented validation logic to reconcile Jira ticket status with actual monitor configuration on subsequent pipeline runs.</li>
                        <li>Contributed to migration of repositories from GitLab to GitHub Enterprise, assisting repository transition and workflow validation.</li>
                    </ul>

                    <h3>Freelance Web Developer — IIT Dharwad Websites</h3>
                    <p><em>Jan — July 2025</em></p>
                    <ul>
                        <li>Built and deployed multiple institute websites using React, Tailwind and Strapi CMS.</li>
                        <li>Designed responsive, accessible UIs enabling non-technical staff to manage content via Strapi.</li>
                        <li>Deployed on Linux VMs with Nginx and managed server configuration and hosting.</li>
                    </ul>
                </div>
            </section>

            <section id="projects">
                <h2>Selected Projects</h2>
                <div className="projects-row">
                    <div className="project-coloumn">
                        <h3>AI Agentic Pipeline for VC Decision Support</h3>
                        <p>Python, FastAPI, Pathway, MongoDB, Kafka, LLMs (RAG)</p>
                        <ul>
                            <li>Built an agentic RAG pipeline to assist VCs in evaluating startups using real-time data.</li>
                            <li>Designed multi-agent workflows, realtime transcript indexing and CRM extraction.</li>
                            <li>Implemented scalable backend with FastAPI, Kafka CDC and Pathway for streaming processing.</li>
                        </ul>
                    </div>

                    <div className="project-coloumn">
                        <h3>VerifyIT — Student Leave & Security Management</h3>
                        <p>React Native, TypeScript, Node.js, Express, MongoDB, Firebase</p>
                        <ul>
                            <li>Mobile leave-management system with role-based workflows for students, wardens and security staff.</li>
                            <li>QR-based entry/exit tracking with timestamped logs and status updates for security operations.</li>
                            <li>REST APIs with role-based access control; Firebase auth and Nodemailer notifications.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="skills">
                <h2>Skills</h2>
                <div style={{maxWidth:900, margin:'0 auto', textAlign:'left'}}>
                    <p><strong>Languages:</strong> C, C++, Python, JavaScript</p>
                    <p><strong>Web & Backend:</strong> React.js, React Native, Node.js, Express.js, FastAPI, Strapi CMS, REST APIs</p>
                    <p><strong>Databases & Infra:</strong> MongoDB, MySQL, AWS, Nginx, Git, GitHub, Bash, Postman</p>
                </div>
            </section>

            <section id="extras">
                <h2>Extra Curriculars</h2>
                <div style={{maxWidth:800, margin:'0 auto', textAlign:'left'}}>
                    <h4>PR Team Member — Career Development Cell, IIT Dharwad</h4>
                    <p>Coordinated placement process of 10+ companies, managing communications and logistics.</p>
                    <h4>Python Workshop Mentor — IIT Dharwad</h4>
                    <p>Mentored students in Python programming covering data structures, OOP and problem solving.</p>
                </div>
            </section>

            <section id="contacts">

                <h2>Connect with Me</h2>

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
                </div>
            </section>
        </div>
    );
}