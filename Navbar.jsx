import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../stylesheets/navbar.css';


const Navbar = () => {
  //const [showAppointment, setShowAppointment] = useState(false); // Define state for appointment display

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" width="100" height="50" />
        </Link>
      </div>
      <div className="navbar-links">
        <div className="navbar-link-dropdown">
          <Link to="/new" className="dropbtn">New</Link>
          <div className="dropdown-content">
            <Link to="/new/sedan">Sedans</Link>
            <Link to="/new/suv">SUVs</Link>
            <Link to="/new/truck">Trucks</Link>
            <Link to="/new/mustang">Mustangs</Link>
          </div>
        </div>
        <div className="navbar-link-dropdown">
          <Link to="/used" className="dropbtn">Used</Link>
          <div className="dropdown-content">
            <Link to="/used/sedan">Used Sedans</Link>
            <Link to="/used/suv">Used SUVs</Link>
            <Link to="/used/truck">Used Trucks</Link>
            <Link to="/used/mustang">Used Mustangs</Link>
          </div>
        </div>
        <div className="navbar-link-dropdown">
          <Link to="/electric" className="dropbtn">Electric</Link>
          <div className="dropdown-content">
            <Link to="/electric/sedan">Electric Sedans</Link>
            <Link to="/electric/suv">Electric SUVs</Link>
            <Link to="/electric/truck">Electric Trucks</Link>
            <Link to="/electric/mustang">Electric Mustangs</Link>
          </div>
        </div>
        <div className="navbar-link-dropdown">
          <Link to="/appointment" className="dropbtn" >Book Appointment</Link>
        </div>
        <div className="navbar-link-dropdown">
          <Link to="/sell-car" className="dropbtn">Sell Your Car</Link>
        </div>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass search_icon"></i>
      </div>
      <div className="navbar-link-dropdown account">
        <Link to="/" className="dropbtn user-i"><i className="fas fa-user"></i></Link>
        <div className="dropdown-content">
          <Link to="/">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/">My Listings</Link>
        </div>
      </div>
      {/* {showAppointment && <Appointment />} */}
    </nav>
  );
};

export default Navbar;
