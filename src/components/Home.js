import React, { useEffect, useState } from "react";
import "../style/Home.css";
// import Launch from "./Launch";
import Header from "./Header";
import Navigation from "./Navigation";
import Countdown from "./Countdown";
import PreGandhaarThemes from "./PreGandhaarThemes";
import GandhaarThemes from "./GandhaarThemes";
import Events from "./Events";
import StarLineUp from "./StarLineUp";
import Schedule from "./Schedule";
import ImageGallery from "./ImageGallery";
import Footer from "./Footer";
import Event from "./Event";
import EventSlider from "./EventSlider";
import EventCard from "./EventCard";
import CulturalFestMindMap from "./CulturalFestMindMap";
import EventSource from "./EventSource";
import Bubbles from "./Bubbles";
import Team from "./Team";
import DevTeam from "./DevTeam";
import AboutUs from "./AboutUs";
import Launchpage from "./Srushti";


function Home() {
  const targetDate = "2025-01-30T23:59:59";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <div>
      <Srushti />
      <div id="home">
        {" "}
        <Header toggleDrawer={toggleDrawer} />
      </div>
      <div>
        {" "}
        <Navigation
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          scrollThreshold={200}
        />{" "}
      </div>
      <div>
        <Launchpage />
      </div>
      <div id="countdown">
        {" "}
        <Countdown targetDate={targetDate} />{" "}
      </div>

      <div id="pre-themes">
        <CulturalFestMindMap />
      </div>
      {/* <CulturalFestMindMap /> */}
      <div id="themes">
        <PreGandhaarThemes />
      </div>
      {/* <Events /> */}
      <div>
        <EventSource />
      </div>

      {/* <HundredDaysOfPoetry /> */}
      {/* <Event /> */}
      {/* <DummyGallery /> */}
      {/* <EventSlider /> */}

      <div id="star-lineup">
        <StarLineUp />
      </div>
      {/* <EventCard /> */}
      <Schedule />
      <AboutUs />
      <ImageGallery />
      <Team />
      {/* <FireFooter /> */}
      {/* <Footer /> */}
      <DevTeam />
      <Footer />
    </div>
  );
}

export default Home;
