import React from "react";
import "../style/ThemeCarousel.css"; // Add your CSS styling

// Individual ThemeCard component
const ThemeCard = ({ day, title, description }) => {
  return (
    <div className="theme-card">
      <div className="theme-day">Day {day}</div>
      <div className="theme-title">{title}</div>
      <p className="theme-description">{description}</p>
    </div>
  );
};

// Main ThemeCarousel component
const ThemeCarousel = () => {
  const themes = [
    {
      day: 1,
      title: "Fashion",
      description: "Modern and stylish themes for fashion enthusiasts.",
    },
    {
      day: 2,
      title: "Corporate Corporate",
      description: "Professional looks with a sleek style.",
    },
    {
      day: 3,
      title: "Nostalgic 90s",
      description: "A retro theme bringing back the 90s vibe.",
    },
    {
      day: 4,
      title: "Rubberized Women",
      description: "Bold, empowering, and chic.",
    },
  ];

  return (
    <div className="theme-carousel">
      <h1>Gandhaar Themes</h1>
      <div className="theme-cards-container">
        {themes.map((theme, index) => (
          <ThemeCard
            key={index}
            day={theme.day}
            title={theme.title}
            description={theme.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeCarousel;
