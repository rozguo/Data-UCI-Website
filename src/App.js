import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Datathon from "./pages/Datathon/datathon.js";
import Events from "./pages/events.js";
import Contact from "./pages/Contact/contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/datathon" element={<Datathon />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
