import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => (
  <div className="header">
    <div className="div-logo">
      <img className="logo" src={logo} alt="user" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav className="nav-des">
      <Link className="nav-link" activeclassname="active" to="/">Rockets</Link>
      {/* <Link className="nav-link" activeclassname="active" to="/Missions">Missions</Link> */}
      <hr />
      <Link className="nav-link" activeclassname="active" to="/MyProfile">My Profile</Link>
    </nav>
  </div>
);

export default Navbar;
