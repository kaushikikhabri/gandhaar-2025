import React, { useState, useEffect } from "react";
import "../style/EventCard.css";

const cards = [
  { id: 1, image: "path/to/image1.jpg" },
  { id: 2, image: "path/to/image2.jpg" },
  { id: 3, image: "path/to/image3.jpg" },
  // Add more cards if needed
];

const EventCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return "card center";
    if (index === (currentIndex - 1 + cards.length) % cards.length)
      return "card left";
    if (index === (currentIndex + 1) % cards.length) return "card right";
    return "card hidden";
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={getCardClass(index)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={card.image}
            alt={`Card ${card.id}`}
            className="card-image"
          />
        </div>
      ))}
      <button className="nav-button left-button" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="nav-button right-button" onClick={handleNext}>
        &#10095;
      </button>
      <div className="dots">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
