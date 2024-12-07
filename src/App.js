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
import StarLineUp from "./components/StarLineUp";
import AllEvents from "./components/AllEvents";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

