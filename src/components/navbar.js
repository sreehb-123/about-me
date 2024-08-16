import React from "react";
import "./navbar.css"

export default function Navbar() {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contact</a></li>
            </ul>
        </nav>
    );
}