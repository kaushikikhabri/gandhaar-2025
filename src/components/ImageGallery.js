import React, { useState } from "react";
import "../style/ImageGallery.css";
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image8 from '../images/image8.jpeg';
import image9 from '../images/image9.jpeg';
import image10 from '../images/image10.jpeg';
import image11 from '../images/image11.jpeg';

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' },
  { src: image5, alt: 'Image 5' },
  { src: image6, alt: 'Image 6' },
  { src: image7, alt: 'Image 7' },
  { src: image8, alt: 'Image 8' },
  { src: image9, alt: 'Image 9' },
  { src: image10, alt: 'Image 10' },
  { src: image11, alt: 'Image 11' },
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {/* <div className="scrolling-text">GANDHAAR-2024</div> */}
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {/* <div className="scrolling-text">GANDHAAR-2024</div> */}

      {/* Modal for displaying the full-size image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );

}

export default ImageGallery;
