import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./Countdown";

function Home() {
  const targetDate = "2025-01-30T23:59:59";

  return (
    <div>
      <Header />
      <h1>Countdown Timer</h1>
      <Countdown targetDate={targetDate} />
      <Footer />
    </div>
  );
}

export default Home;
