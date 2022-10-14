import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Missions from './components/missions/Missions';
import Navbar from './components/navbar/Navbar';
import Rockets from './components/rockets/Rockets';
import Profile from './components/my_profile/MyProfile';
import store from './redux/configureStore';

function App() {
  return (

    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/Missions" element={<Missions />} /> */}
          <Route path="/" element={<Rockets />} />
          <Route path="/MyProfile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
