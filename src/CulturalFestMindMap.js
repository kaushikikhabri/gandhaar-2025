import React, { useState } from "react";
import "./CulturalFestMindMap.css";

const themes = [
  {
    id: 1,
    name: "Film & Photography",
    img: "/images/themename.webp",
    description: "Explore the art of capturing moments.",
    top: "100px",
    left: "150px",
  },
  {
    id: 2,
    name: "Beau Vista",
    img: "/images/themename.webp",
    description: "A journey through the beautiful vistas.",
    top: "200px",
    left: "350px",
  },
  {
    id: 3,
    name: "Florence",
    img: "/images/themename.webp",
    description: "Dance your heart out with Florence.",
    top: "350px",
    left: "200px",
  },
  {
    id: 4,
    name: "Quiz Fest",
    img: "/images/themename.webp",
    description: "Test your knowledge and win prizes!",
    top: "450px",
    left: "400px",
  },
];

const CulturalFestMindMap = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]); // Default theme selected

  return (
    <div className="mindmap-container">
      {/* Mind Map Section */}
      <div className="mindmap-background">
        {themes.map((theme) => (
          <div
            key={theme.id}
            onClick={() => setSelectedTheme(theme)}
            className="theme-pin"
            style={{
              top: theme.top,
              left: theme.left,
            }}
          >
            <img src={theme.img} alt={theme.name} />
            {/* <p>{theme.name}</p> */}
          </div>
        ))}

        {/* SVG for Zigzag Lines */}
        <svg className="zigzag-lines" width="700" height="600">
          {themes.map((theme) => (
            <line
              key={theme.id}
              x1={parseInt(theme.left) + 30} // Adjust based on image size
              y1={parseInt(theme.top) + 30}
              x2="580" // Approximate x position of polaroid container
              y2="500" // Approximate y position of polaroid container
              stroke="#AE445A"
              strokeWidth="3"
            />
          ))}
        </svg>
      </div>

      {/* Polaroid Display Section */}
      <div className="polaroid-container">
        {/* Polaroid for the image */}
        <div className="polaroid polaroid-image">
          <img
            src={selectedTheme.img}
            alt={selectedTheme.name}
            style={{ width: "100%" }}
          />
        </div>

        {/* Polaroid for the description */}
        <div className="polaroid polaroid-description">
          <h4>{selectedTheme.name}</h4>
          <p>{selectedTheme.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CulturalFestMindMap;
