// import React from "react";
// import "../style/PreGandhaarThemes.css";

// function PreGandhaarThemes() {
//   return <div>PreGandhaarThemes</div>;
// }

// export default PreGandhaarThemes;
import React, { useState, useEffect } from "react";
import "../style/PreGandhaarThemes.css";
import themesera from "../images/themesera.PNG";
import themeshautefashion from "../images/themesfashion.PNG";
import themessaree from "../images/themesimg3.PNG";


function PreGandhaarThemes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const itemList = [
    {
      id: 0,
      background: "#EA3D41",
      day: "Day 1 - 23rd January:",
      content: "Haute Fashion",
      imgSrc: themeshautefashion,
    },
    {
      id: 1,
      background: "#2D5643",
      day: "Day 2 - 24th January:",
      content: "Elegance Era",
      imgSrc: themesera,
    },
    {
      id: 2,
      background: "#E7A043",
      day: "Day 3 - 25th January:",
      content: "Traditional",
      imgSrc: themessaree,
    },
  ];

  const count = itemList.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex >= count - 1 ? 0 : prevIndex + 1));
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex <= 0 ? count - 1 : prevIndex - 1));
    setRotation((prevRotation) => (prevRotation - 90) % 360);
  };

  return (
    <div className="carousel">
      <div className="list">
        {itemList.map((item, index) => (
          <div
            key={item.id}
            className={`item ${index === activeIndex ? "active" : ""} ${
              index !== activeIndex ? "hidden" : ""
            }`}
            style={{ "--background": item.background }}
          >
            <div className="day1">{item.day}</div>
            <div className="content">{item.content}</div>
            <img src={item.imgSrc} className="fruit" alt={item.content} />
          </div>
        ))}
      </div>
      <div className="leaves"></div>
      <div className="stick"></div>
      <div className="background"></div>
      <div
        className="mockup"
        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
      ></div>
      <div className="shadow"></div>
      <div className="arrow">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
}

export default PreGandhaarThemes;
