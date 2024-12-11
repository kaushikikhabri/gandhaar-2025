import React, { useEffect, useState } from "react";
import s_logo from "../images/sanstha-logo.png";
import c_logo from "../images/college-logo.png";
import "../style/Header.css";

const Header = ({ toggleDrawer }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo-left">
          <img id="logo1" src={s_logo} alt="Sanstha Logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#events">Events</a>
          </li>
          <li className="nav-item">
            <a href="#schedule">Schedule</a>
          </li>
          <li className="nav-item">
            <a href="#workshops">Workshops</a>
          </li>
          <li className="nav-item">
            <a href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a href="#about-us">About Us</a>
          </li>
        </ul>
        <div className="logo-right">
          <img id="logo2" src={c_logo} alt="College Logo" />
        </div>
      </div>
      <div className="tag">
        <p className="tag1">MKSSS's Cummins College of Engineering for Women</p>
        <p className="tag2">Brings You</p>
        <p className="tag3">Gandhaar 2025</p>
      </div>
      {isMobile && (
        <div className="floating-icon" onClick={toggleDrawer}>
          <div className="floating-content">
            <span role="img" aria-label="menu">
              ✨
            </span>
            <p>Menu</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
