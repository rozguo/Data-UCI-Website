import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/home';
import About from './pages/about';
import Datathon from './pages/datathon.js';
import Events from './pages/events.js';
import Join from './pages/join.js';
import Contact from './pages/contact';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/'element={< Home />} />
        <Route path='/about'element={< About />} />
        <Route path='/datathon'element={< Datathon />} />
        <Route path='/events'element={< Events />} />
        <Route path='/join'element={< Join />} />
        <Route path='/contact'element={< Contact />} />
      </Routes>

    </Router>
  );
}

export default App;
