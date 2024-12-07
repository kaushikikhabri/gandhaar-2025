import React from "react";
import s_logo from "../images/sanstha-logo.png";
import c_logo from "../images/college-logo.png";
import "../style/Header.css";

const Header = () => {
 

  return (
    <div className="header">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-left">
          <img id="logo1" src={s_logo} alt="Sanstha Logo" />
        </div>

        {/* Menu items (visible only on large screens) */}
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#events">Events</a></li>
          <li className="nav-item"><a href="#schedule">Schedule</a></li>
          <li className="nav-item"><a href="#workshops">Workshops</a></li>
          <li className="nav-item"><a href="#team">Team</a></li>
          <li className="nav-item"><a href="#about-us">About Us</a></li>
        </ul>

        <div className="logo-right">
          <img id="logo2" src={c_logo} alt="College Logo" />
        </div>
      </div>
      
       <div className="tag">
        <p className="tag1">MKSSS's Cummins College of Engineering for Women </p>
        <p className="tag2">Brings You</p>
        <p className="tag3">Gandhaar 2025</p>
      </div>
    </div>
  );
};

export default Header;
