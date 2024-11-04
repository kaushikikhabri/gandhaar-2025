import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Launch from "./components/Launch";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch" element={<Launch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
