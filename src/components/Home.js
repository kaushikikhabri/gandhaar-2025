import React from "react";
import Launch from "./Launch";
import Header from "./Header";
import Countdown from "./Countdown";
import PreGandhaarThemes from "./PreGandhaarThemes";
import GandhaarThemes from "./GandhaarThemes";
import Events from "./Events";
import StarLineUp from "./StarLineUp";
import Schedule from "./Schedule";
import ImageGallery from "./ImageGallery";
import Footer from "./Footer";

function Home() {
  const targetDate = "2025-01-30T23:59:59";
  return (
    <div>
      <Header />
      <Countdown targetDate={targetDate} />
      <PreGandhaarThemes />
      <GandhaarThemes />
      <Events />
      <StarLineUp />
      <Schedule />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default Home;
