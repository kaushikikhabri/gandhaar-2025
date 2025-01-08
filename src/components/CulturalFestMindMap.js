import React, { useState } from "react";
import orangeStickyNote from "../theme_images/orangeStickyNote.jpg";
import craft from "../theme_images/craft.webp";
import "../style/CulturalFestMindMap.css";
import Bandhani from "../theme_images/banaras.jpg";
import Bantai from "../theme_images/tapori.jpg";
import Candy from "../theme_images/Candy_1.jpeg";
import old_money from "../theme_images/old_money.jpg";

const themes = [
  {
    id: 1,
    name: "Indian Craft Couture",
    img: craft, // Image for the pin
    polaroidImg: Bandhani, // Image for the Polaroid
    description:
      "Outfits that represent the work of Indian artisans. This includes embroideries like Chikankari, Kantha , Gota work, or Prints like Bandhani, Block Prints, Ikkat, Brocade, Lehariya etc",
    top: "18%",
    left: "22%",
  },
  {
    id: 2,
    name: "Bantai Banters",
    img: orangeStickyNote, // Image for the pin
    polaroidImg: Bantai, // Image for the Polaroid
    description:
      "Loud, over the top outfits inspired by Tapori characters/ villains. Use Bright tops covered by knotted shirts, Funky Sunglasses, Chunky chains, scarves, bandana to complete the look.",
    top: "35%",
    left: "70%",
  },
  {
    id: 3,
    name: "Sweetopia",
    img: orangeStickyNote, // Image for the pin
    polaroidImg: Candy, // Image for the Polaroid
    description: "Dress up as your favourite Candy/ Chocolate.",
    top: "55%",
    left: "30%",
  },
  {
    id: 4,
    name: "Old Money",
    img: orangeStickyNote, // Image for the pin
    polaroidImg: old_money, // Image for the Polaroid
    description:
      "It is all about elegant, timeless styles that look classy and expensive (not flashy) Tailored outfits, use of neutral colour clothing, pearls, Blazers, minimalistics but statement jewellery",
    top: "80%",
    left: "60%",
  },
];
const CulturalFestMindMap = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]); // Default theme selected

  return (
    <div>
      <h1 className="heading">Pre-Gandhaar Themes</h1>
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
              src={selectedTheme.polaroidImg} // Use the Polaroid-specific image
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
