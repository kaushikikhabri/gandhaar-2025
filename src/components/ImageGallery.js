import React, { useState, useRef } from "react";
import "../style/ImageGallery.css";
import image1 from "../images/image1.JPG";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.JPG";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.JPG";
import image6 from "../images/image6.JPG";
import image7 from "../images/image7.JPG";
import image8 from "../images/image8.JPG";
import image9 from "../images/image9.JPG";
import image10 from "../images/image10.JPG";
import image11 from "../images/image11.JPG";
import image12 from "../images/image12.JPG";
import image13 from "../images/image13.JPG";
import image14 from "../images/image14.JPG";

const images = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
  { src: image7, alt: "Image 7" },
  { src: image8, alt: "Image 8" },
  { src: image9, alt: "Image 9" },
  { src: image10, alt: "Image 10" },
  { src: image11, alt: "Image 11" },
  { src: image12, alt: "Image 12" },
  { src: image13, alt: "Image 13" },
  { src: image14, alt: "Image 14" },
];

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const imageGridRef = useRef(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    if (imageGridRef.current) {
      imageGridRef.current.style.animationPlayState = "paused";
    }
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    if (imageGridRef.current) {
      imageGridRef.current.style.animationPlayState = "running";
    }
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="image-grid" ref={imageGridRef}>
        {[...images].map((image, index) => (
          <div
            key={index}
            className="image-item"
            style={{
              transform: `translateY(${index % 2 === 0 ? -20 : 10}px)`,
            }}
            onClick={() => openModal(index % images.length)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="modal-image"
            />
            <span className="arrow left" onClick={showPrevImage}>
              &#10094;
            </span>
            <span className="arrow right" onClick={showNextImage}>
              &#10095;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
