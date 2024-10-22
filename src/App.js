import React from "react";
import Home from "./components/home";
import Skills from "./components/skills";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Skills />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}