import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slideImages } from "./slideImages";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/EventSlider.css"; // Import the Event.css styles

// Import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

function EventSldier() {
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
  return (
    <div className="event-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="event-swiper"
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`slide-${index}`}
              className="event-slide-img"
              style={{
                ...imageStyle,
                transform: index === 1 ? "scale(1.1)" : "scale(0.8)",
                opacity: index === 1 ? 1 : 0.7,
                transition: "transform 0.5s ease, opacity 0.5s ease",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default EventSldier;
