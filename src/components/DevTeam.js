import React from "react";
import "../style/DevTeam.css";

import kaushikiImage from "../star_dev_images/Kaushiki.png";
import saiImage from "../star_dev_images/SAI.png";
import yashodaImage from "../star_dev_images/yashoda.png";
import avasthiImage from "../star_dev_images/Avasthi.png";
import mrunalImage from "../star_dev_images/mrunal.png";
import sameekshaImage from "../star_dev_images/Sameeksha.png";
import ieshaImage from "../star_dev_images/isha.png";
import shrushtiImage from "../star_dev_images/shrushti.png";
import purvaImage from "../star_dev_images/purva.png";

const DevTeam = () => {
  const teamMembers = [
    { name: "Kaushiki Khabri", img: kaushikiImage },
    { name: "Sai Ingole", img: saiImage },
    { name: "Yashoda Kangle", img: yashodaImage },
    { name: "Avasthi Jadhav", img: avasthiImage },
    { name: "Mrunal Shinde", img: mrunalImage },
    { name: "Sameeksha Tantak", img: sameekshaImage },
    { name: "Srushti Nikam", img: shrushtiImage },
    { name: "Isha Bule", img: ieshaImage },
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
