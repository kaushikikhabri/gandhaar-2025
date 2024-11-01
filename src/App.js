import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ThemeCarousel from "./components/ThemeCarousel";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme" element={<ThemeCarousel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
