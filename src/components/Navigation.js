import React, { useEffect, useState } from "react";
import "../style/Navigation.css";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the scroll position
      if (scrollPosition > 200) { // Change 200 to your desired threshold
        setIsSticky(true);
        setIsVisible(true);
      } else {
        setIsSticky(false);
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navcontainer ${isSticky ? "sticky" : ""}`}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <ul className="navmenu">
        <li className="navitem"><a href="#home">Home</a></li>
        <li className="navitem"><a href="#events">Events</a></li>
        <li className="navitem"><a href="#schedule">Schedule</a></li>
        <li className="navitem"><a href="#workshops">Workshops</a></li>
        <li className="navitem"><a href="#team">Team</a></li>
        <li className="navitem"><a href="#about-us">About Us</a></li>
      </ul>
    </div>
  );
};

export default Navigation;
