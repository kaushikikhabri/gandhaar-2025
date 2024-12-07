import React from "react";
import "../style/EventSource.css";
import { slideImages } from "./slideImages";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";

// Can be any JSX.Element tag
const items = [
  <img src="https://iili.io/JuNiPJj.png" alt="Slide 1" />,
  <img src="https://iili.io/JTS7QTb.jpg" alt="Slide 2" />,
  <img src="https://iili.io/JTS7ive.jpg" alt="Slide 3" />,
  <img src="https://iili.io/J78zUAJ.webp" alt="Slide 4" />,
  <img src="https://iili.io/J7SK5p2.webp" alt="Slide 5" />,
  <img src="https://iili.io/JuaGeh7.jpg" alt="Slide 6" />,
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
