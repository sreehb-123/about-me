import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/skills");
    };

    return(
        <div className="home-container">
            <h1 className="my-name">Welcome, Iam
                <span className="my-name"> Harsha</span>
            </h1>
            <h1 className="my-role">An aspiring Web Developer</h1>
            <p>If you are wondering why you should select me...</p>
            <button onClick={handleClick}>CLICK HERE</button>
        </div>
    );
}