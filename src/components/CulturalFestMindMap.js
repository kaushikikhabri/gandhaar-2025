import React, { useState } from "react";
import "../style/CulturalFestMindMap.css";

const themes = [
  {
    id: 1,
    name: "Film & Photography",
    img: "/images/orange_stickynote.webp",
    description: "Explore the art of capturing moments.",
    top: "18%", // Position as a percentage of the map height
    left: "22%", // Position as a percentage of the map width
  },
  {
    id: 2,
    name: "Beau Vista",
    img: "/images/orange_stickynote.webp",
    description: "A journey through the beautiful vistas.",
    top: "35%",
    left: "70%",
  },
  {
    id: 3,
    name: "Florence",
    img: "/images/orange_stickynote.webp",
    description: "Dance your heart out with Florence.",
    top: "55%",
    left: "30%",
  },
  {
    id: 4,
    name: "Quiz Fest",
    img: "/images/orange_stickynote.webp",
    description: "Test your knowledge and win prizes!",
    top: "80%",
    left: "60%",
  },
];

const CulturalFestMindMap = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]); // Default theme selected

  return (
    <div>
      <h1 className="heading">Gandhaar Themes</h1>
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
            </div>
          ))}

          {/* SVG for Zigzag Lines */}
          <svg className="zigzag-lines" width="100%" height="100%">
            {themes.map((theme) => {
              const x1 = `calc(${theme.left} + 2%)`; // Dynamic pin start position
              const y1 = `calc(${theme.top} + 2%)`;
              const x2 = "85%"; // Approximate Polaroid position
              const y2 = "85%";

              return (
                <line
                  key={theme.id}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#AE445A"
                  strokeWidth="3"
                />
              );
            })}
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
    </div>
  );
};

export default CulturalFestMindMap;
