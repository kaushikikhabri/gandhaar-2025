import React, { useState, useEffect, useRef } from "react";
import "../style/Event.css"; // Optional CSS file if you want to extract styles
import { slideImages } from "./slideImages";

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

  // Start slider on mount and clean up on unmount
  useEffect(() => {
    startInterval(); // Start the slider
    return () => stopInterval(); // Cleanup the interval on unmount
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  const getVisibleImages = (index) => {
    const length = slideImages.length;
    return [
      slideImages[(index - 1 + length) % length], // Left image
      slideImages[index], // Center image
      slideImages[(index + 1) % length], // Right image
    ];
  };

  const handlePrevious = () => {
    stopInterval(); // Pause the interval when navigating manually
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slideImages.length - 1 : prevIndex - 1
    );
    startInterval(); // Resume the interval after navigation
  };

  const handleNext = () => {
    stopInterval(); // Pause the interval when navigating manually
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    startInterval(); // Resume the interval after navigation
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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

  const iconStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "2rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    zIndex: 10,
    userSelect: "none",
  };

  return (
    <div
      style={{
        width: "100vw", // Ensures it takes the full viewport width
        height: "auto", // Adjust as needed for your content
        margin: "0px", // Removes any default margin
        padding: "200px", // Optional: removes padding if needed
      }}
      onMouseEnter={stopInterval} // Pause slider when mouse enters container
      onMouseLeave={startInterval} // Resume slider when mouse leaves container
    >
      <div style={containerStyle}>
        {/* Left Arrow */}
        <div style={{ ...iconStyle, left: "5%" }} onClick={handlePrevious}>
          &#8249;
        </div>

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
          />
        ))}

        {/* Right Arrow */}
        <div style={{ ...iconStyle, right: "5%" }} onClick={handleNext}>
          &#8250;
        </div>
      </div>
    </div>
  );
};

export default Event;
