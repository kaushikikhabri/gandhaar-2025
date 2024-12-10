import React from "react";
import "../style/StarLineUp.css";
import concertImage from "../images/concert.jpg";

function StarLineUp() {
  return (
    <div className="star-lineup-container">
      <h2>Star Line Up</h2>
      <div className="star-gift-container">
        <div className="star-gift">
          <input type="checkbox" id="star-click" />
          <label htmlFor="star-click" className="star-click"></label>
          <div className="star-card-container">
            <div className="star-card">
              <div className="star-card-inner">
                <div className="star-card-front">
                  <img src={concertImage} alt="Concert" />
                </div>
                <div className="star-card-back">
                  <h3>Sing with the rhythm...</h3>
                  <h1>Enjoy!!!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarLineUp;