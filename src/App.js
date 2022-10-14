import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import Missions from "./components/missions/Missions";
import Navbar from "./components/navbar/Navbar";
import Rockets from "./components/rockets/Rockets";
import Profile from "./components/my_profile/MyProfile";
import store from "./redux/configureStore";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missionData());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/" element={<Rockets />} />
          <Route path="/my-profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
