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


import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import EventDetails from "./components/EventDetails";
import Home from "./components/Home";
import Launch from "./components/Launch";
import ClassicalDance from "./components/All-Events/ClassicalDance";
import IntraCollegeDance from "./components/All-Events/IntraCollegeDance";
import SoloDance from "./components/All-Events/SoloDance";
import StreetGroove from "./components/All-Events/StreetGroove";
import StarLineUp from "./components/StarLineUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/street-groove" element={<StreetGroove />} />
          <Route path="/solo-dance" element={<SoloDance />} />
          <Route path="/intra-college-dance" element={<IntraCollegeDance />} />
          <Route path="/classical-dance" element={<ClassicalDance />} />
          <Route path="/star-lineup" element={<StarLineUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
