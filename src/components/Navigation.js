import React, { useEffect, useState } from "react";
import "../style/Navigation.css";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the scroll position
      setIsSticky(scrollPosition > 200); // Sticky navbar when scrolled past threshold
      setIsVisible(scrollPosition > 200); // Navbar visibility when scrolled past threshold
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      {isVisible && !isDrawerOpen && ( // Hide navbar when drawer is open
        <div
          className={`navcontainer ${isSticky ? "sticky" : ""}`}
          style={{ display: "flex" }}
        >
          {/* Navigation Menu */}
          <ul className="navmenu">
            <li className="navitem"><a href="#home">Home</a></li>
            <li className="navitem"><a href="#events">Events</a></li>
            <li className="navitem"><a href="#schedule">Schedule</a></li>
            <li className="navitem"><a href="#workshops">Workshops</a></li>
            <li className="navitem"><a href="#team">Team</a></li>
            <li className="navitem"><a href="#about-us">About Us</a></li>

            {/* Hamburger Menu */}
            {isMobile && (
              <button className="hamburger hamburger-animated" onClick={toggleDrawer}>
                ☰
              </button>
            )}
          </ul>
        </div>
      )}

      {/* Drawer */}
      {isMobile && (
        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <h2>Menu</h2>
            <button className="close-drawer" onClick={toggleDrawer}>
              ✖
            </button>
          </div>
          <ul className="drawermenu">
            <li className="draweritem">
              <a href="#home" onClick={toggleDrawer}>
                <span>🏠</span>  Home
              </a>
            </li>
            <li className="draweritem">
              <a href="#events" onClick={toggleDrawer}>
                <span>🎉</span>  Events
              </a>
            </li>
            <li className="draweritem">
              <a href="#schedule" onClick={toggleDrawer}>
                <span>📅</span>  Schedule
              </a>
            </li>
            <li className="draweritem">
              <a href="#workshops" onClick={toggleDrawer}>
                <span>🛠</span>  Workshops
              </a>
            </li>
            <li className="draweritem">
              <a href="#team" onClick={toggleDrawer}>
               <span>👥</span>  Team
              </a>
            </li>
            <li className="draweritem">
              <a href="#about-us" onClick={toggleDrawer}>
                <span>ℹ️</span>  About Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
