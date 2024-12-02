import React from "react";
import "../style/Home.css";
import Launch from "./Launch";
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
import HundredDaysOfPoetry from "./HundredDaysofPoetry";
import DummyGallery from "./DummyGallery";

function Home() {
  const targetDate = "2025-01-30T23:59:59";
  return (
    <div>
      <Header />
      <Navigation />
      <Countdown targetDate={targetDate} />
      <PreGandhaarThemes />
      <CulturalFestMindMap />
      {/* <GandhaarThemes /> */}
      {/* <Events /> */}
      <HundredDaysOfPoetry />
      <Event />
      <DummyGallery />
      {/* <EventSlider /> */}
      <StarLineUp />
      <EventCard />
      <Schedule />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default Home;
