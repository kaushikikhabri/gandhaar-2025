import React from "react";
import "../style/DevTeam.css";

import kaushikiImage from "../images/Kaushiki.png";
import saiImage from "../images/sai.jpg";
import yashodaImage from "../images/yashoda.png";
import avasthiImage from "../images/Avasthi.png";
import mrunalImage from "../images/mrunal.png";
import sameekshaImage from "../images/Sameeksha.png";
import ieshaImage from "../images/isha.png";
import shrushtiImage from "../images/shrushti.png";
import purvaImage from "../images/purva.png";

const DevTeam = () => {
  const teamMembers = [
    { name: "Kaushiki Khabri", img: kaushikiImage },
    { name: "Sai Ingole", img: saiImage },
    { name: "Yashoda Kangle", img: yashodaImage },
    { name: "Avasthi Jadhav", img: avasthiImage },
    { name: "Mrunal Shinde", img: mrunalImage },
    { name: "Sameeksha Tantak", img: sameekshaImage },
    { name: "Srushti Nikam", img: shrushtiImage },
    { name: "Isha Bhule", img: ieshaImage },
    { name: "Purva Sarda", img: purvaImage },
  ];

  return (
    <div className="dev-team-body">
      <div className="dev-team-section">
        <h1>Meet Our Development Team</h1>
        <div className="dev-team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="dev-team-member">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevTeam;
