import React, { useState } from "react";
import "../style/Schedule.css";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  // const Schedule = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const eventDetails = {
    inauguration: {
      start: "10:00 AM",
      end: "11:00 AM",
      location: "Main Building Quadrangle",
    },
    zumba: {
      start: "11:00 AM",
      end: "12:00 PM",
      location: "Stage 2",
    },
    dilSeDance: {
      start: "12:00 PM",
      end: "1:00 PM",
      location: "Main Building Quadrangle",
    },
    sketchSaga: {
      start: "1:00 PM",
      end: "2:00 PM",
      location: "Between Main & IT Building",
    },
    facePainting: {
      start: "2:00 PM",
      end: "3:00 PM",
      location: "Mechanical Circle",
    },
    adMad: {
      start: "3:00 PM",
      end: "4:00 PM",
      location: "Stage 2",
    },
    suronKaSafar: {
      start: "4:00 PM",
      end: "5:00 PM",
      location: "Instrumentation Auditorium",
    },
    heGele: {
      start: "5:00 PM",
      end: "6:00 PM",
      location: "KB Joshi Hall",
    },
    insia: {
      start: "6:00 PM",
      end: "7:00 PM",
      location: "Stage 2",
    },
    doodle: {
      start: "7:00 PM",
      end: "8:00 PM",
      location: "Between Main & IT Building",
    },
    vaadVivad: {
      start: "8:00 PM",
      end: "9:00 PM",
      location: "Stage 2",
    },
    heenaHustle: {
      start: "9:00 PM",
      end: "10:00 PM",
      location: "Mechanical Circle",
    },
    fashionShow: {
      start: "10:00 PM",
      end: "11:00 PM",
      location: "Samastha Ground",
    },
  };

  const handleMouseEnter = (eventName) => {
    setHoveredEvent(eventName);
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  const handleDayChange = (day) => {
    setActiveDay(day);
  };

  return (
    <div className="schedule-container">
      <div className="timeline">
        {[
          "10:00AM",
          "11:00AM",
          "12:00PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
          "9:00PM",
        ].map((time, index) => (
          <div key={index} className="timeline-label">
            {time}
          </div>
        ))}
      </div>

      <div className={`events-container ${hoveredEvent ? "blurred" : ""}`}>
        {Object.keys(eventDetails).map((eventName) => (
          <div
            key={eventName}
            className={`event ${eventName}`}
            onMouseEnter={() => handleMouseEnter(eventName)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="event-name">
              {eventName.replace(/([A-Z])/g, " $1").toUpperCase()}
            </div>
            {hoveredEvent === eventName && (
              <div className="event-details">
                <div className="event-name">
                  {eventName.replace(/([A-Z])/g, " $1").toUpperCase()}
                </div>{" "}
                {/* Display event name */}
                <div>
                  <strong>Start:</strong> {eventDetails[eventName].start}
                </div>
                <div>
                  <strong>End:</strong> {eventDetails[eventName].end}
                </div>
                <div>
                  <strong>Location:</strong> {eventDetails[eventName].location}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Events for Active Day */}
      {/* <div className="events-container">
        {Schedule[activeDay].map((event, index) => (
          <div
            key={index}
            className={`event ${event.name.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ backgroundColor: event.color || "#ccc" }}
          >
            {event.name}
          </div>
        ))}
      </div> */}

      {/* Day Buttons */}
      <div className="day-buttons-container">
        {[1, 2, 3, 4].map((day) => (
          <button
            key={day}
            className={`day-button ${activeDay === day ? "active" : ""}`}
            onClick={() => handleDayChange(day)}
          >
            Day {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
