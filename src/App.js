import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/Screen/LandingPage/LandingPage";
import Certificate from "../src/Screen/Certificate/Certificate";
import ContactUs from "../src/Screen/ContactUs/ContactUs";
import Project from "../src/Screen/Project/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
