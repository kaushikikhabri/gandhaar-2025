import React from "react";
import "../style/StarLineUp.css";
import concertImage from "../images/concert.jpg";

function StarLineUp() {
  return (
    <div className="star-lineup-container">
      <div className="giftcontainer">
        <div className="gift">
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="click"></label>
          <div className="card-container">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={concertImage} alt="Concert" />
                </div>
                <div className="card-back">
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
