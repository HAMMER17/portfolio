import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Portfolio from './pages/Portfolio';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
