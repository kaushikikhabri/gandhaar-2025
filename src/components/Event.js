import React, { useState, useEffect, useRef } from "react";
import "../style/Event.css"; // Optional CSS file if you want to extract styles
import { slideImages } from "./slieImages";

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Reference to store interval ID

  // Function to start the interval
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 2000);
  };

  // Function to stop the interval
  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideImages.length]);

  const getVisibleImages = (index) => {
    const length = slideImages.length;
    return [
      slideImages[(index - 1 + length) % length], // Left image
      slideImages[index], // Center image
      slideImages[(index + 1) % length], // Right image
    ];
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    overflow: "visible", // Allow images to overflow the container
  };

  const imageStyle = {
    width: "550px",
    height: "350px",
    borderRadius: "15px",
    objectFit: "cover",
    boxShadow: `
      0px 0px 25px 1px rgba(255, 49, 49,0.9)
    `,
    transition: "transform 0.5s ease, opacity 0.5s ease",
  };

  return (
    <div
      style={{
        width: "100vw", // Ensures it takes the full viewport width
        height: "auto", // Adjust as needed for your content
        margin: "0px", // Removes any default margin
        padding: "200px", // Optional: removes padding if needed
      }}
    >
      <div style={containerStyle}>
        {getVisibleImages(currentIndex).map((image, i) => (
          <img
            key={i}
            src={image.url}
            alt={image.caption || `Slide ${i + 1}`}
            style={{
              ...imageStyle,
              transform: i === 1 ? "scale(1.1)" : "scale(0.8)",
              opacity: i === 1 ? 1 : 0.7,
              transition: "transform 0.5s ease, opacity 0.5s ease",
            }}
            onMouseEnter={stopInterval}
            onMouseLeave={startInterval}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
