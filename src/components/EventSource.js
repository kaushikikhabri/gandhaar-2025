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
import image9 from "../posters/theatre.png";
import image10 from "../posters/Skills lab.PNG";
import image11 from "../posters/Joyland.PNG";

// Update items array with local images
const items = [
  { image: image1, category: "Groove Arena" },
  { image: image2, category: "Jamsphere" },
  { image: image3, category: "Gathering Hub" },
  { image: image4, category: "Wordsmith’s Corner" },
  { image: image5, category: "Savoury Symphony" },
  { image: image6, category: "Artiscope" },
  { image: image7, category: "THE DIGITAL STAGE" },
  { image: image8, category: "Haute Route" },
  { image: image9, category: "Theatrical Tapestry" },
  { image: image10, category: "Skill Lab" },
  { image: image11, category: "Joyland" },
];

function EventSource() {
  const navigate = useNavigate();

  // const handleCardClick = (category) => {
  //   navigate("/event-details"); // Navigate to EventDetails with category in state
  // };

  // const handleCardClick = (category) => {
  //   navigate(`/event-details/${encodeURIComponent(category)}`);
  // };

  const handleCardClick = (category) => {
    navigate("/event-details", { state: { category } });
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
