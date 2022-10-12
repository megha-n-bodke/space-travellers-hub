import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Missions from './components/missions/Missions';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </Router>

  );
}

export default App;
