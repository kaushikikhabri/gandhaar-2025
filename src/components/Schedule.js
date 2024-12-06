import React,{ useState } from "react";
import "../style/Schedule.css";


const daySchedules = {
  Day1: [
    { id: 1, text: "INAUGURATION", startRow: 1, endRow: 5, startCol: 2, endCol: 14 ,start : "10:00 AM",end : "12:00 PM", background: "linear-gradient(to right, #ff00b3, #00b3ff)",location: "MAIN BUILDING QUADRANGLE", registrationLink: "No need of registration"},
    { id: 2, text: "ZUMBA", startRow: 5, endRow: 6, startCol: 2, endCol: 14 ,start : "12:00 PM",end : "12:30 PM", background: "linear-gradient(to right, #85e085, #80d4ff)",location: "STAGE 2", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfBN8cppGmvFMOxG2qOs6EAVhEez_VjqKDeQ6otV-lN02A0uw/formrestricted"},
    { id: 3, text: "DIL SE DANCE", startRow: 6, endRow: 17, startCol: 2, endCol: 4,start : "12:30 PM",end : "6:00 PM", background: "linear-gradient(to right, #ff00b3, #00b3ff)",location: "MAIN BUILDING QUADRANGLE", registrationLink: "#"},
    { id: 4, text: "AD MAD", startRow: 6, endRow: 12, startCol: 8, endCol: 10,start : "12:30 PM",end : "3:30 PM", background: "linear-gradient(to right, #85e085, #80d4ff)",location: "STAGE 2", registrationLink: "#"},
    { id: 5, text: "INSIA", startRow: 12, endRow: 13, startCol: 4, endCol: 8 ,start : "3:30 PM",end : "4:00 PM", background: "linear-gradient(to right, #85e085, #80d4ff)",location: "STAGE 2", registrationLink: "#"},
    { id: 6, text: "VAAD VIVAD", startRow: 13, endRow: 17, startCol: 4, endCol: 8 ,start : "4:00 PM",end : "6:00 PM", background: "linear-gradient(to right, #85e085, #80d4ff)",location: "STAGE 2", registrationLink: "#"},
    { id: 7, text: "SKETCH SAGA", startRow: 6, endRow: 9, startCol: 4, endCol: 6,start : "12:30 PM",end : "2:00 PM", background: "linear-gradient(to right, #a8ffb4, #f0e130)",location: "BETWEEN MAIN & IT BUILDING", registrationLink: "#" },
    { id: 8, text: "DOODLE", startRow: 12, endRow: 15, startCol: 8, endCol: 11,start : "3:30 PM",end : "5:00 PM", background: "linear-gradient(to right, #a8ffb4, #f0e130)",location: "BETWEEN MAIN & IT BUILDING", registrationLink: "#" },
    { id: 9, text: "FACE PAINTING", startRow: 6, endRow: 10, startCol: 6, endCol: 8,start : "12:30 PM",end : "2:30 PM", background: "linear-gradient(to right, #00b4db, #0083b0)",location: "MECHANICAL CIRCLE", registrationLink: "#"},
    { id: 10, text: "HEENA HUSTLE", startRow: 12, endRow: 16, startCol: 11, endCol: 14,start : "3:30 PM",end : "5:30 PM", background: "linear-gradient(to right, #00b4db, #0083b0)",location: "MECHANICAL CIRCLE", registrationLink: "#"},
    { id: 11, text: "SURON KA SAFAR", startRow: 7, endRow: 11, startCol: 10, endCol: 12,start : "1:00 PM",end : "3:00 PM", background: "linear-gradient(to right, #f7b731, #e74c3c)",location: "INSTRUMENTATION AUDITORIUM", registrationLink: "#" },
    { id: 12, text: "HE GELE", startRow: 7, endRow: 8, startCol: 12, endCol: 14,start : "1:00 PM",end : "1:30 PM", background: "linear-gradient(to right, #ff7eb3, #ffb347",location: "KB JOSHI HALL", registrationLink: "#"},
    { id: 13, text: "FASHION SHOW", startRow: 17, endRow: 23, startCol: 2, endCol: 14,start : "6:00 PM",end : "9:00 PM", background: "linear-gradient(to right, #7e57c2, #f0ad4e)",location: "SAMSTHA GROUND", registrationLink: "#" },
    // Add more events as needed

  ],

  Day2: [
    { id: 3, text: "TECH TALK", startRow: 2, endRow: 5, startCol: 2, endCol: 10, start: "10:00 AM", end: "11:30 AM", background: "linear-gradient(to right, #85e085, #80d4ff)" },
    // Add events for Day2
  ],
  Day3: [
    { id: 4, text: "WORKSHOP", startRow: 2, endRow: 5, startCol: 2, endCol: 14, start: "10:00 AM", end: "12:00 PM", background: "linear-gradient(to right, #f88379, #ffb347)" },
    // Add events for Day3
  ],
  Day4: [
    { id: 5, text: "CLOSING CEREMONY", startRow: 2, endRow: 6, startCol: 2, endCol: 14, start: "10:00 AM", end: "12:00 PM", background: "linear-gradient(to right, #7e57c2, #f0ad4e)" },
    // Add events for Day4
  ],
};

const times = [
  "10AM","11AM","12PM", "1PM","2PM","3PM","4PM", "5PM","6PM","7PM","8PM","9PM"
];



const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");
  const events = daySchedules[selectedDay];
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEventClick = (event) => {
    setModalData(event);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="schedule-wrapper">
      {/* Day Buttons */}
      <div className="day-buttons">
        {Object.keys(daySchedules).map((day) => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? "active" : ""}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule-container">
        {/* Time Column */}
        {times.map((time, index) => (
        <React.Fragment key={index}>
          <div
            className="time-slot-container"
            style={{
              gridRow: index * 2 + 1, // Skip 1 row by multiplying index
            }}
          >
            <div className="time-label">{time}</div>
            <div className="time-slot"></div>
          </div>
        </React.Fragment>
      ))}



        {/* Events */}
        {events.map((event) => (
          <div
            key={event.id}
            className="event"
            style={{
              gridColumn: `${event.startCol} / ${event.endCol}`,
              gridRow: `${event.startRow} / ${event.endRow}`,
              background: event.background,
            }}

            onClick={() => handleEventClick(event)}
          >
            <div className="start-time">{event.start}</div>
            <div className="event-text">{event.text}</div>
            <div className="end-time">{event.end}</div>
          </div>
        ))}
    </div>

      {/* Modal for Event Details */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{modalData.text}</h2>
            <p><strong>Start:</strong> {modalData.start}</p>
            <p><strong>End:</strong> {modalData.end}</p>
            <p><strong>Location:</strong> {modalData.location}</p>
            <p><strong>Registration Link:</strong> <a href={modalData.registrationLink} target="_blank" rel="noopener noreferrer">Register</a></p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      </div>
     
    
  );
};

export default Schedule;
