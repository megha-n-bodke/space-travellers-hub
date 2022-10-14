import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Rocket from './components/rockets/Rocket';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/Rocket" element={<Rocket />} />
      </Routes>
    </Router>

  );
}

export default App;
