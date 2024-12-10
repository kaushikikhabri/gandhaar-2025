import React from "react";
import "../style/Footer.css";
import logo from "../images/gandhaar_logo.png"; // Import the image

const Footer = () => {
  return (
    <div className="footer">
      {/* Marquee Section */}
      <div className="marq">
        <div className="scroll" style={{ "--t": "15s" }}>
          <div>
            <span>GANDHAAR 2025</span>
            <span>CELEBRATING CULTURE</span>
            <span>JOIN THE FEST</span>
            <span>MUSIC</span>
            <span>DANCE</span>
            <span>FUN EVENTS</span>
          </div>
          <div>
            <span>GANDHAAR 2025</span>
            <span>CELEBRATING CULTURE</span>
            <span>JOIN THE FEST</span>
            <span>MUSIC</span>
            <span>DANCE</span>
            <span>FUN EVENTS</span>
          </div>
        </div>
        <div className="scroll" style={{ "--t": "17s" }}>
          <div>
            <span>ART</span>
            <span>DRAMA</span>
            <span>WORKSHOPS</span>
            <span>CULINARY ARTS</span>
            <span>PHOTOGRAPHY</span>
          </div>
          <div>
            <span>ART</span>
            <span>DRAMA</span>
            <span>WORKSHOPS</span>
            <span>CULINARY ARTS</span>
            <span>PHOTOGRAPHY</span>
          </div>
        </div>
        <div className="scroll" style={{ "--t": "15s" }}>
          <div>
            <span>MEMORIES FOR A LIFETIME</span>
            <span>CULTURAL MELANGE</span>
            <span>EXPRESSION</span>
            <span>FIREWORKS OF TALENT</span>
            <span>UNITY IN DIVERSITY</span>
          </div>
          <div>
            <span>MEMORIES FOR A LIFETIME</span>
            <span>CULTURAL MELANGE</span>
            <span>EXPRESSION</span>
            <span>FIREWORKS OF TALENT</span>
            <span>UNITY IN DIVERSITY</span>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="col col1">
          <h3>Gandhaar 2025</h3>

        </div>
        <div className="col col2">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#events">Events</a>
          <h4>Contact</h4>
          <p><a href="mailto:gandhaar@cumminscollege.com">gandhaar@cumminscollege.com</a></p>
        </div>
        <div className="col col3">

          <img src={logo} alt="Gandhaar Logo" className="gandhaar-logo" />
        </div>
      </div>

      <div className="copyright">
        <p>2025 © All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
