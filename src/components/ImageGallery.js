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
import image15 from "../images/image15.JPG";
import image16 from "../images/image16.JPG";
import image17 from "../images/image17.JPG";
import image18 from "../images/image18.JPG";
import image19 from "../images/image19.JPG";
import image20 from "../images/image20.JPG";
import image21 from "../images/image21.JPG";
import image22 from "../images/image22.JPG";
import image23 from "../images/image23.JPG";
import image24 from "../images/image24.JPG";
import image25 from "../images/image25.JPG";
import image26 from "../images/image26.JPG";
import image27 from "../images/image27.JPG";
import image28 from "../images/image28.JPG";
import image29 from "../images/image29.JPG";
import image30 from "../images/image30.JPG";
import image31 from "../images/image31.JPG";
import image32 from "../images/image32.JPG";
import image33 from "../images/image33.JPG";
import image34 from "../images/image34.JPG";
import image35 from "../images/image35.JPG";
import image36 from "../images/image36.JPG";
import image37 from "../images/image37.JPG";
import image38 from "../images/image38.JPG";

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
  { src: image15, alt: "Image 15" },
  { src: image16, alt: "Image 16" },
  { src: image17, alt: "Image 17" },
  { src: image18, alt: "Image 18" },
  { src: image19, alt: "Image 19" },
  { src: image20, alt: "Image 20" },
  { src: image21, alt: "Image 21" },
  { src: image22, alt: "Image 22" },
  { src: image23, alt: "Image 23" },
  { src: image24, alt: "Image 24" },
  { src: image25, alt: "Image 25" },
  { src: image26, alt: "Image 26" },
  { src: image27, alt: "Image 27" },
  { src: image28, alt: "Image 28" },
  { src: image29, alt: "Image 29" },
  { src: image30, alt: "Image 30" },
  { src: image31, alt: "Image 31" },
  { src: image32, alt: "Image 32" },
  { src: image33, alt: "Image 33" },
  { src: image34, alt: "Image 34" },
  { src: image35, alt: "Image 35" },
  { src: image36, alt: "Image 36" },
  { src: image37, alt: "Image 37" },
  { src: image38, alt: "Image 38" },
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const imageGridRef = useRef(null);

  const openImage = (index) => {
    setSelectedIndex(index);

    if (imageGridRef.current) {
      imageGridRef.current.style.animationPlayState = "paused";
    }
  };

  const closeImage = () => {
    setSelectedIndex(null);

    if (imageGridRef.current) {
      imageGridRef.current.style.animationPlayState = "running";
    }
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="image-grid" ref={imageGridRef}>
        {[...images].map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openImage(index)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeImage}>
              &times;
            </span>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
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
