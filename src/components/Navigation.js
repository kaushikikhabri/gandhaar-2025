import React, { useEffect, useState } from "react";
import "../style/Navigation.css";

const Navigation = ({ isDrawerOpen, toggleDrawer, scrollThreshold = null }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const [isVisible, setIsVisible] = useState(scrollThreshold === null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollThreshold !== null) {
        setIsSticky(scrollPosition > scrollThreshold);
        setIsVisible(scrollPosition > scrollThreshold);
      } else {
        setIsVisible(true);
        setIsSticky(true);
  
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <>
      {isVisible && !isDrawerOpen && (
        <div
          className={`navcontainer ${isSticky ? "sticky" : ""}`}
          style={{ display: "flex" }}
        >
          <ul className="navmenu">
            <li className="navitem"><a href="#home">Home</a></li>
            <li className="navitem"><a href="#events">Events</a></li>
            <li className="navitem"><a href="#schedule">Schedule</a></li>
            <li className="navitem"><a href="#theme">Theme</a></li>
            <li className="navitem"><a href="#star-line-up">Star Line-Up</a></li>
            <li className="navitem"><a href="#gallery">Gallery</a></li>
            <li className="navitem"><a href="#team">Team</a></li>
            <li className="navitem"><a href="#about-us">About Us</a></li>
            
          </ul>
        </div>
      )}
      {isMobile && (
        <div  className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <button className="close-drawer" onClick={toggleDrawer}>
              ✖
            </button>
          </div>
          <ul className="drawermenu">
            <li className="draweritem">
              <a href="#home" onClick={toggleDrawer}>
                <span>🏠</span> Home
              </a>
            </li>
            <li className="draweritem">
              <a href="#events" onClick={toggleDrawer}>
                <span>🎉</span> Events
              </a>
            </li>
            <li className="draweritem">
              <a href="#schedule" onClick={toggleDrawer}>
                <span>📅</span> Schedule
              </a>
            </li>
            <li className="draweritem">
              <a href="#theme" onClick={toggleDrawer}>
                <span>🎨</span> Theme
              </a>
            </li>
            <li className="draweritem">
              <a href="#star-line-up" onClick={toggleDrawer}>
                <span>✨</span> Star Line-Up
              </a>
            </li>
            <li className="draweritem">
              <a href="#about-us" onClick={toggleDrawer}>
                <span>🖼️</span> Gallery
              </a>
            </li>
            <li className="draweritem">
              <a href="#team" onClick={toggleDrawer}>
                <span>👥</span> Team
              </a>
            </li>
  

            <li className="draweritem">
              <a href="#about-us" onClick={toggleDrawer}>
                <span>ℹ️</span> About Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
