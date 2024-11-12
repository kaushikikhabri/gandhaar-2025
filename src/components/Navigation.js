import React, { useState } from "react";
import "../style/Navigation.css"; // Import the CSS

const Navigation = () => {
  const [isMenuActive, setIsMenuActive] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      
      <div className="menu-text" onClick={toggleMenu}>
        Menu
      </div>

      <ul className={`nav-links ${isMenuActive ? "active" : ""}`}>
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#schedule" className="nav-link">Schedule</a></li>
        <li><a href="#workshops" className="nav-link">Workshops</a></li>
        <li><a href="#events" className="nav-link">Events</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
