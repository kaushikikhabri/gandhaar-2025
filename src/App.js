// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import Launch from "./components/Launch";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/launch" element={<Launch />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Schedule from './components/Schedule';
import AboutUs from "./components/AboutUs";


function App() {
  return (
    <div className="App">
      <Schedule />

      <h1 style={{ textAlign: "center", color: "#fff", margin: "20px 0" }}>
        Welcome to About Us
      </h1>
      < AboutUs />
    </div>
  );
}

export default App;
