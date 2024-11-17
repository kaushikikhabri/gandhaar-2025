import React from "react";
import { Link } from "react-router-dom";
import "../style/Events.css";

function Events() {
  return (
    <div>
      {/* Button to navigate to EventDetails page */}
      <Link to="/event-details">
        <button className="navigate-button">Go to Event Details</button>
      </Link>
    </div>
  );
}

export default Events;

