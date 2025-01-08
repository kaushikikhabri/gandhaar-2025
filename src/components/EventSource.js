import React from "react";
import "../style/EventSource.css";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import { useNavigate } from "react-router-dom";

// Import images from the posters folder
import image1 from "../posters/1.png";
import image2 from "../posters/2.png";
import image3 from "../posters/3.png";
import image4 from "../posters/4.jpg";
import image5 from "../posters/5.png";
import image6 from "../posters/Artiscope.PNG";
import image7 from "../posters/Digital stage.PNG";
import image8 from "../posters/haute route.png";
import image9 from "../posters/Joyland.PNG";

// Update items array with local images
const items = [
  { image: image1, category: "grooveArena" },
  { image: image2, category: "soloSynergy" },
  { image: image3, category: "nrutyanjali" },
  { image: image4, category: "streetBrawl" },
  { image: image5, category: "stepItUp" },
  { image: image6, category: "Artiscope" },
  { image: image7, category: "DigitalStage" },
  { image: image8, category: "HauteRoute" },
  { image: image9, category: "Joyland" },
];

function EventSource() {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate("/event-details", { state: { category } }); // Navigate to EventDetails with category in state
  };

  return (
    <div className="event-source">
      <h2 className="event-source-title">Event Categories</h2>

      <Carousel
        items={items.map(({ image, category }, index) => (
          <div key={index} onClick={() => handleCardClick(category)}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container
                borderRadius: "8px", // Optional: Rounded corners for better visuals
                display: "block", // Prevents spacing issues
              }}
            />
          </div>
        ))}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
        className="carousel-container"
      />
    </div>
  );
}

export default EventSource;
