import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllEvents from "./components/AllEvents";
import EventDetails from "./components/EventDetails";
import Home from "./components/Home";
import StarLineUp from "./components/StarLineUp";
import VideoLaunch from "./components/VideoLaunch.js";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/launch" element={<Launch />} /> */}
          <Route path="/star-lineup" element={<StarLineUp />} />
          <Route path="/event-details" element={<EventDetails />} />
          {/* Use eventKey to identify the event */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/launch" element={<Launch />} /> */}
          <Route path="/star-lineup" element={<StarLineUp />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/videolaunch" element={<VideoLaunch />} />
          {/* Dynamic route for AllEvents, passing eventKey */}
          <Route path="/event/:eventKey" element={<AllEvents />} />
          {/* Use eventKey to identify the event */}
          //{" "}
          <Route
            path="/miss-freshers"
            element={<AllEvents eventKey="missFreshers" />}
          />
          <Route
            path="/dance-battle"
            element={<AllEvents eventKey="danceBattle" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
