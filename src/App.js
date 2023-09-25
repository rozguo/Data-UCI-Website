import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Datathon from "./pages/Datathon/datathon.js";
import Events from "./pages/Events/events.js";
import Contact from "./pages/Contact/contact";
import AppBanner from "./app-announcement/application-announcement";

import "./App.css";

function App() {
  return (
    <>
      <AppBanner />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/datathon" element={<Datathon />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
