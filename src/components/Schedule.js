// import React from "react";
// import "../style/Schedule.css";

// const Schedule = () => {
//   const rows = 25;
//   const columns = 8;

//   return (
//     <div className="schedule-container">
//       {Array.from({ length: rows }).map((_, rowIndex) => (
//         <div key={rowIndex} className="schedule-row">
//           {Array.from({ length: columns }).map((_, colIndex) => (
//             <div key={colIndex} className="schedule-cell">
//               {`R${rowIndex + 1}C${colIndex + 1}`}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Schedule;

import React, { useState } from "react";
import "../style/Schedule.css";

const daySchedules = {
  Day1: [
    {
      id: 1,
      text: "INAUGURATION",
      startRow: 1,
      endRow: 5,
      startCol: 2,
      endCol: 17,
      start: "10:00 AM",
      end: "12:00 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 2,
      text: "DJEMBE WORKSHOP",
      startRow: 5,
      endRow: 9,
      startCol: 2,
      endCol: 5,
      start: "12:00 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "STAGE 2",
    },
    {
      id: 3,
      text: "INTRA CLG GROUP DANCE",
      startRow: 6,
      endRow: 17,
      startCol: 5,
      endCol: 8,
      start: "12:30 PM",
      end: "6:00 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 4,
      text: "SKETCHING",
      startRow: 6,
      endRow: 9,
      startCol: 8,
      endCol: 11,
      start: "12:30 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #ff9966, #ff5e62)",
      location: "STAGE 2",
    },
    {
      id: 5,
      text: "TSHIRT/ SNEAKERS DESIGNING",
      startRow: 6,
      endRow: 10,
      startCol: 11,
      endCol: 14,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "STAGE 2",
    },
    {
      id: 6,
      text: "SPELLING BEE",
      startRow: 6,
      endRow: 10,
      startCol: 14,
      endCol: 17,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "STAGE 2",
    },
    {
      id: 7,
      text: "DEPT ANTAKSHARI FACULTY",
      startRow: 9,
      endRow: 13,
      startCol: 2,
      endCol: 5,
      start: "2:00 PM",
      end: "4:00 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 8,
      text: "DEBATE COMPETITION",
      startRow: 10,
      endRow: 14,
      startCol: 8,
      endCol: 10,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #13547a, #80d0c7)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 9,
      text: "PAINTING COMPETITION",
      startRow: 10,
      endRow: 14,
      startCol: 10,
      endCol: 12,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "MECHANICAL CIRCLE",
    },
    {
      id: 10,
      text: "DUMB CHARADES",
      startRow: 11,
      endRow: 15,
      startCol: 12,
      endCol: 15,
      start: "3:00 PM",
      end: "5:00 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "MECHANICAL CIRCLE",
    },
    {
      id: 11,
      text: "MEHENDI",
      startRow: 12,
      endRow: 16,
      startCol: 15,
      endCol: 17,
      start: "3:00 PM",
      end: "5:30 PM",
      background: "linear-gradient(to right, #72c237, #b3e673)",
      location: "INSTRUMENTATION AUDITORIUM",
    },
    {
      id: 12,
      text: "BTECH FASHION SHOW",
      startRow: 17,
      endRow: 23,
      startCol: 2,
      endCol: 17,
      start: "6:00 PM",
      end: "9:00 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "KB JOSHI HALL",
    },
    // linear-gradient(to right, #12c2e9, #c471ed),"linear-gradient(to right, #fc466b, #3f5efb)
  ],

  Day2: [
    {
      id: 1,
      text: "OCTOPUS RACE",
      startRow: 1,
      endRow: 5,
      startCol: 2,
      endCol: 17,
      start: "8:00 AM",
      end: "10:00 AM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 2,
      text: "CONE RUSH",
      startRow: 5,
      endRow: 7,
      startCol: 2,
      endCol: 5,
      start: "10:00 AM",
      end: "11:00 AM",
      background: "linear-gradient(to right, #85e085, #80d4ff)",
      location: "STAGE 2",
    },
    {
      id: 3,
      text: "INTER-CLG DANCE",
      startRow: 5,
      endRow: 10,
      startCol: 5,
      endCol: 8,
      start: "10:00 AM",
      end: "12:30 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 4,
      text: "SWARASHREE BAND",
      startRow: 5,
      endRow: 8,
      startCol: 8,
      endCol: 11,
      start: "10:00 AM",
      end: "11:30 AM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "STAGE 2",
    },
    {
      id: 5,
      text: "PORTRAIT COMPT",
      startRow: 5,
      endRow: 9,
      startCol: 11,
      endCol: 14,
      start: "10:00 AM",
      end: "12:00 PM",
      background: "linear-gradient(to right, #13547a, #80d0c7)",
      location: "STAGE 2",
    },
    {
      id: 6,
      text: "DEPT ANTAKSHARI STUDENT",
      startRow: 5,
      endRow: 9,
      startCol: 14,
      endCol: 17,
      start: "10:00 AM",
      end: "12:00 PM",
      background: "linear-gradient(to right, #12c2e9, #c471ed)",
      location: "STAGE 2",
    },
    {
      id: 7,
      text: "CUMMINS GOT LATENT",
      startRow: 9,
      endRow: 14,
      startCol: 2,
      endCol: 5,
      start: "12:00 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 8,
      text: "DOODLING",
      startRow: 10,
      endRow: 14,
      startCol: 5,
      endCol: 8,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #a8ffb4, #f0e130)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 9,
      text: "TEXTURE MOON WORKSHOP",
      startRow: 10,
      endRow: 14,
      startCol: 8,
      endCol: 11,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "MECHANICAL CIRCLE",
    },
    {
      id: 10,
      text: "UKULELE WORKSOP",
      startRow: 10,
      endRow: 14,
      startCol: 11,
      endCol: 14,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "MECHANICAL CIRCLE",
    },
    {
      id: 11,
      text: "TRASHION",
      startRow: 11,
      endRow: 15,
      startCol: 14,
      endCol: 17,
      start: "1:00 PM",
      end: "3:00 PM",
      background: "linear-gradient(to right, #f7b731, #e74c3c)",
      location: "INSTRUMENTATION AUDITORIUM",
    },
    {
      id: 12,
      text: "DANCE BATTLE",
      startRow: 15,
      endRow: 19,
      startCol: 2,
      endCol: 9,
      start: "3:00 PM",
      end: "5:00 PM",
      background: "linear-gradient(to right, #ff7eb3, #ffb347",
      location: "KB JOSHI HALL",
    },
    {
      id: 13,
      text: "KALAWANT NAATAK",
      startRow: 16,
      endRow: 18,
      startCol: 9,
      endCol: 17,
      start: "3:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #11998e, #38ef7d)",
      location: "KB JOSHI HALL",
    },
    {
      id: 14,
      text: "STAR NIGHT 1",
      startRow: 19,
      endRow: 21,
      startCol: 2,
      endCol: 17,
      start: "5:00 PM",
      end: "6:00 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "KB JOSHI HALL",
    },
    {
      id: 15,
      text: "FACULTY PERFORMANCE",
      startRow: 21,
      endRow: 27,
      startCol: 2,
      endCol: 17,
      start: "6:00 PM",
      end: "9:00 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "KB JOSHI HALL",
    },
  ],
  Day3: [
    {
      id: 1,
      text: "UP DOWN RACE",
      startRow: 1,
      endRow: 5,
      startCol: 2,
      endCol: 16,
      start: "8:00 AM",
      end: "10:00 AM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 2,
      text: "DODGEBALL IN CIRCLE",
      startRow: 5,
      endRow: 7,
      startCol: 2,
      endCol: 4,
      start: "10:00 AM",
      end: "11:00 AM",
      background: "linear-gradient(to right, #85e085, #80d4ff)",
      location: "STAGE 2",
    },
    {
      id: 3,
      text: "GROUP SINGING",
      startRow: 5,
      endRow: 12,
      startCol: 4,
      endCol: 6,
      start: "10:00 AM",
      end: "1:30 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 4,
      text: "SOLO DANCE",
      startRow: 7,
      endRow: 13,
      startCol: 2,
      endCol: 4,
      start: "11:00 AM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #13547a, #80d0c7)",
      location: "STAGE 2",
    },
    {
      id: 5,
      text: "MAKEUP",
      startRow: 7,
      endRow: 11,
      startCol: 6,
      endCol: 8,
      start: "11:00 AM",
      end: "1:00 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "STAGE 2",
    },
    {
      id: 6,
      text: "KALAKAAR KATTA",
      startRow: 7,
      endRow: 19,
      startCol: 10,
      endCol: 12,
      start: "11:00 AM",
      end: "5:00 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "STAGE 2",
    },
    {
      id: 7,
      text: "ESCAPE ROOM",
      startRow: 7,
      endRow: 11,
      startCol: 8,
      endCol: 10,
      start: "11:00 AM",
      end: "1:00 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 8,
      text: "MASTERCHEF",
      startRow: 9,
      endRow: 13,
      startCol: 12,
      endCol: 14,
      start: "12:00 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #a8ffb4, #f0e130)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 9,
      text: "FLUID ART WORKSHOP",
      startRow: 9,
      endRow: 13,
      startCol: 14,
      endCol: 16,
      start: "12:00 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "MECHANICAL CIRCLE",
    },
    {
      id: 10,
      text: "BEAUTY PEAGENT",
      startRow: 13,
      endRow: 18,
      startCol: 2,
      endCol: 4,
      start: "2:00 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "MECHANICAL CIRCLE",
    },
    {
      id: 11,
      text: "ALL IN ONE QUIZ",
      startRow: 12,
      endRow: 18,
      startCol: 4,
      endCol: 6,
      start: "1:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #f7b731, #e74c3c)",
      location: "INSTRUMENTATION AUDITORIUM",
    },
    {
      id: 12,
      text: "ART RELAY",
      startRow: 14,
      endRow: 18,
      startCol: 6,
      endCol: 10,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #ff7eb3, #ffb347",
      location: "KB JOSHI HALL",
    },
    {
      id: 13,
      text: "INSIA FLASHMOB",
      startRow: 14,
      endRow: 15,
      startCol: 12,
      endCol: 16,
      start: "2:30 PM",
      end: "3:00 PM",
      background: "linear-gradient(to right, #ff7eb3, #ffb347",
      location: "KB JOSHI HALL",
    },
    {
      id: 14,
      text: "NARRATIVE",
      startRow: 15,
      endRow: 19,
      startCol: 12,
      endCol: 16,
      start: "3:00 PM",
      end: "5:00 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "KB JOSHI HALL",
    },
    {
      id: 15,
      text: "STAR NIGHT 2",
      startRow: 21,
      endRow: 24,
      startCol: 2,
      endCol: 16,
      start: "6:00 PM",
      end: "7:30 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "KB JOSHI HALL",
    },
    {
      id: 16,
      text: "DJ NIGHT ",
      startRow: 24,
      endRow: 27,
      startCol: 2,
      endCol: 16,
      start: "7:30 PM",
      end: "9:00 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "KB JOSHI HALL",
    },
  ],
  Day4: [
    {
      id: 1,
      text: "CLASSICAL DANCE",
      startRow: 1,
      endRow: 7,
      startCol: 2,
      endCol: 5,
      start: "10:00 AM",
      end: "1:00 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 2,
      text: "TREASURE HUNT",
      startRow: 2,
      endRow: 6,
      startCol: 5,
      endCol: 8,
      start: "10:30 AM",
      end: "12:30 PM",
      background: "linear-gradient(to right, #11998e, #38ef7d)",
      location: "STAGE 2",
    },
    {
      id: 3,
      text: "CLASS DRAMA",
      startRow: 7,
      endRow: 14,
      startCol: 2,
      endCol: 5,
      start: "1:00 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 4,
      text: "NUKKAD NATAK",
      startRow: 5,
      endRow: 13,
      startCol: 8,
      endCol: 11,
      start: "12:00 PM",
      end: "4:00 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "STAGE 2",
    },
    {
      id: 5,
      text: "RANGOLI",
      startRow: 5,
      endRow: 11,
      startCol: 11,
      endCol: 14,
      start: "12:00 PM",
      end: "3:00 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "STAGE 2",
    },
    {
      id: 6,
      text: "PUNCH NEEDLE WORKSHOP",
      startRow: 5,
      endRow: 9,
      startCol: 14,
      endCol: 17,
      start: "12:00 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #85e085, #80d4ff)",
      location: "STAGE 2",
    },
    {
      id: 7,
      text: "BEST OUT OF WASTE",
      startRow: 7,
      endRow: 11,
      startCol: 5,
      endCol: 8,
      start: "1:00 PM",
      end: "3:00 PM",
      background: "linear-gradient(to right, #f7b731, #e74c3c)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 8,
      text: "PRIZE DISTRIBUTION",
      startRow: 16,
      endRow: 20,
      startCol: 2,
      endCol: 17,
      start: "5:30 PM",
      end: "7:30 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "BETWEEN MAIN & IT BUILDING",
    },
    {
      id: 9,
      text: "GANDHAAR DINNER",
      startRow: 20,
      endRow: 24,
      startCol: 2,
      endCol: 17,
      start: "7:30 PM",
      end: "9:30 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "MECHANICAL CIRCLE",
    },
  ],
};

const timesByDay = {
  Day1: [
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ],
  Day2: [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ],
  Day3: [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ],
  Day4: [
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ],
};

const locations = [
  {
    name: "TIME",
    background: "linear-gradient(to right, #f7b731, #e74c3c)",
    width: "50px",
    height: "30px",
  },
  {
    name: "STAGE 2",
    background: "linear-gradient(to right, #85e085, #80d4ff)",
    width: "50px",
    height: "15px",
  },
  {
    name: "KB JOSHI HALL",
    background: "linear-gradient(to right, #ff7eb3, #ffb347",
    width: "50px",
    height: "20px",
  },
  {
    name: "SAMSTHA GROUND",
    background: "linear-gradient(to right, #7e57c2, #f0ad4e)",
    width: "50px",
    height: "20px",
  },
  {
    name: "MECHANICAL CIRCLE",
    background: "linear-gradient(to right, #00b4db, #0083b0)",
    width: "50px",
    height: "20px",
  },
  {
    name: "INSTRUMENTATION AUDITORIUM",
    background: "linear-gradient(to right, #f7b731, #e74c3c)",
    width: "75px",
    height: "30px",
  },
  {
    name: "BETWEEN MAIN & IT BUILDING",
    background: "linear-gradient(to right, #a8ffb4, #f0e130)",
    width: "55px",
    height: "30px",
  },
  {
    name: "MAIN BUILDING QUADRANGLE",
    background: "linear-gradient(to right, #ff00b3, #00b3ff)",
    width: "55px",
    height: "30px",
  },
];

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");
  const events = daySchedules[selectedDay];
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const times = timesByDay[selectedDay];

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
            <p>
              <strong>Start:</strong> {modalData.start}
            </p>
            <p>
              <strong>End:</strong> {modalData.end}
            </p>
            <p>
              <strong>Location:</strong> {modalData.location}
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
