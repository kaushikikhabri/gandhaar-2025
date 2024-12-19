import React from "react";
import "../style/DevTeam.css";
import dev_images from "./dev_images";
import download from "../images/download.png";

const DevTeam = () => {
  return (
    <div className="dev-background-container">
      <h1 className="dev-team-title">Development Team</h1>

      <div className="dev-team-container">
        <img
          className="earphones-image"
          src="https://www.pngarts.com/files/8/Earbuds-PNG-Photo.png"
          alt=""
        />
        <div className="dev-grid">
          {Object.values(dev_images).map((dev, index) => (
            <div key={index}>
              <div className="dev-image-container">
                <div>
                  <img
                    src={dev.profileImage}
                    alt={dev.name}
                    className="dev-image"
                  />
                </div>
                <div className="dev-info">
                  <p>{dev.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevTeam;
