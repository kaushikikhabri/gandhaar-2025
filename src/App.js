

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import EventDetails from "./components/EventDetails";
import Home from "./components/Home";
import Launch from "./components/Launch";
import StarLineUp from "./components/StarLineUp";
import AllEvents from "./components/AllEvents";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/star-lineup" element={<StarLineUp />} />
          <Route path="/event-details" element={<EventDetails />} />
              {/* Use eventKey to identify the event */}
        <Route path="/miss-freshers" element={<AllEvents eventKey="missFreshers" />} />
        <Route path="/dance-battle" element={<AllEvents eventKey="danceBattle" />} />
        <Route path="/registration" element={<RegistrationPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

