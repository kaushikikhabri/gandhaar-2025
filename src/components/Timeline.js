// Timeline.js

import React, { useState } from "react";
import { ReactComponent as WorkIcon } from "../svg/work.svg";
import { ReactComponent as SchoolIcon } from "../svg/school.svg";
import "../style/Timeline.css";

import {
  day1Elements,
  day2Elements,
  day3Elements,
  day4Elements,
} from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  const [selectedDay, setSelectedDay] = useState(1);

  // Choose the timeline elements based on the selected day
  let timelineElements;
  switch (selectedDay) {
    case 1:
      timelineElements = day1Elements;
      break;
    case 2:
      timelineElements = day2Elements;
      break;
    case 3:
      timelineElements = day3Elements;
      break;
    case 4:
      timelineElements = day4Elements;
      break;
    default:
      timelineElements = [];
  }

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Timeline</h1>

      {/* Day selection buttons */}
      <div className="day-selector">
        <button onClick={() => setSelectedDay(1)}>Day 1</button>
        <button onClick={() => setSelectedDay(2)}>Day 2</button>
        <button onClick={() => setSelectedDay(3)}>Day 3</button>
        <button onClick={() => setSelectedDay(4)}>Day 4</button>
      </div>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="timeline-date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="timeline-element-title">{element.title}</h3>
              <h5 className="timeline-element-subtitle">{element.location}</h5>
              <p className="timeline-description">{element.description}</p>

              {/* Image of the event */}
              <img
                src={element.image} // New line added
                alt={element.title} // New line added
                className="timeline-event-image" // New line added
              />
              {showButton && (
                <a
                  className={`timeline-button ${
                    isWorkIcon
                      ? "timeline-work-button"
                      : "timeline-school-button"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
