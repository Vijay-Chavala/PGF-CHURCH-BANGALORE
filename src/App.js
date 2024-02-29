// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import TopBar from './components/TopBar';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
