import React from "react";
import "../style/HundredDaysOfPoetry.css";
import { images } from "./images"; // Import images from images.js

const GalleryItem = ({ image, position }) => {
  return (
    <div className={`gallery_item ${position}`}>
      <div className="gallery_item_frame">
        <img src={image} alt="Gallery" className="gallery_item_image" />
      </div>
    </div>
  );
};

const HundredDaysOfPoetry = () => {
  return (
    <div>
      <h1 className="gallery-title">Image Gallery</h1>
      <div className="gallery">
        <div className="gallery-wrapper">
          {[...Array(14)].map((_, i) => {
            const position = i % 2 === 0 ? "top" : "bottom"; // Alternate positions for images
            return (
              <GalleryItem
                key={i}
                image={images[i]} // Use images from the imported array
                position={position}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HundredDaysOfPoetry;
