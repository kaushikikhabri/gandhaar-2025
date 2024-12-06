import React, { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => openImage(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="close-button" onClick={closeImage}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
