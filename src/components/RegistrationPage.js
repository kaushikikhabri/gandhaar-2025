import React from "react";
import "../style/RegistrationPage.css";
import Bubbles from "./Bubbles";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
        <Bubbles />
      <div className="regPage-content">
        <h1>Registrations Will Begin Soon!</h1>
        <p>Thank you for your interest in our events. Stay tuned for updates!</p>
        
      </div>

      {/* Add floating orbs */}
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
    </div>
  );
};

export default RegistrationPage;
