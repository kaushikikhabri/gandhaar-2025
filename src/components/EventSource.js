import React from "react";
import "../style/EventSource.css";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";

// Import images from the posters folder
import image1 from "../posters/1.png";
import image2 from "../posters/2.png";
import image3 from "../posters/3.png";
import image4 from "../posters/4.png";
import image5 from "../posters/5.png";
import image6 from "../posters/Artiscope.PNG";
import image7 from "../posters/Digital stage.PNG";
import image8 from "../posters/haute route.png";
import image9 from "../posters/Joyland.PNG";

// Update items array with local images
const items = [
  <img src={image1} alt="Slide 1" />,
  <img src={image2} alt="Slide 2" />,
  <img src={image3} alt="Slide 3" />,
  <img src={image4} alt="Slide 4" />,
  <img src={image5} alt="Slide 5" />,
  <img src={image6} alt="Artiscope" />,
  <img src={image7} alt="Digital Stage" />,
  <img src={image8} alt="Haute Route" />,
  <img src={image9} alt="Joyland" />,
];

function EventSource() {
  return (
    <div className="event-source">
      <h2 className="event-source-title">Event Categories</h2>

      <Carousel
        items={items}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
        className="carousel-container"
      />
    </div>
  );
}

export default EventSource;
