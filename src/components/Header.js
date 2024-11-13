import React from "react";
import s_logo from "../images/sanstha-logo.png";
import c_logo from "../images/college-logo.png";
import "../style/Header.css";


const Header = () => {
  return (
    <div className="header">
    
    <div className="logos">
        <div className="lg1">
          <img id="logo1" src={s_logo} alt="Logo 1" />
        </div>
        <div className="lg2">
          <img id="logo2" src={c_logo} alt="Logo 2" />
        </div>
    </div>

    <div className="tag">
      <p className="tag1">MKSSS's Cummins College </p> <p className="tag2"> Presenting </p> 
      <p className="tag3">Gandhaar 2025</p>
      
    </div>
     
    </div>
  );
};

export default Header;
