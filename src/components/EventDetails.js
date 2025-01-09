import React, { useState, useEffect } from "react";
import "../style/EventDetails.css";
import event_details from "./event_details";
import Header from "./Header";
import Navigation from "./Navigation";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryIcon from "@mui/icons-material/Category";
import LaunchIcon from "@mui/icons-material/Launch";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Bubbles from "./Bubbles";

const EventDetails = () => {
  const [drawerOpen, setDrawerOpen] = useState(null); // For bottom drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleDrawer1 = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const toggleDrawer = (key) => {
    setDrawerOpen(drawerOpen === key ? null : key);
  };

  const [filters, setFilters] = useState({
    day: "All",
    location: "All",
    category: "All",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value === "All" ? "All" : value,
    }));
  };

  const handleSpecificFilterChange = (key, value) => {
    setFilters((prevFilters) => {
      const isAllSelected = prevFilters[key] === "All";
      return {
        ...prevFilters,
        [key]: isAllSelected
          ? value
          : value === prevFilters[key]
          ? "All"
          : value,
      };
    });
  };

  const filteredEvents = Object.entries(event_details).filter(([_, event]) => {
    return (
      (filters.day === "All" || event.day === filters.day) &&
      (filters.location === "All" || event.location === filters.location) &&
      (filters.category === "All" || event.category === filters.category)
    );
  });

  return (
    <div>
      <Navigation  isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer1} />
      <div style={{ display: "flex", backgroundColor: "white" }}>
        {/* Sidebar */}
        <div className="sidebar">
          <h3>
            <FilterListIcon style={{ fontSize: "40px", marginRight: "5px" }} />
            Filters
          </h3>

          {/* Day Filter */}
          <div>
            <h4>Day</h4>
            <div>
              {["All", "Feb 1", "Feb 2", "Feb 3", "Feb 4"].map((day) => (
                <div key={day}>
                  <input
                    type="checkbox"
                    checked={filters.day === day}
                    onChange={() =>
                      day === "All"
                        ? handleFilterChange("day", day)
                        : handleSpecificFilterChange("day", day)
                    }
                  />
                  <label>{day}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <h4>Location</h4>
            <div>
              {[
                "All",
                "Main Bldg Quadrangle",
                "Stage 2",
                "Between Main & IT Building",
                "Mech Circle",
                "Instru Audi",
                "KB Joshi Hall",
                "Samastha Ground",
              ].map((location) => (
                <div key={location}>
                  <input
                    type="checkbox"
                    checked={filters.location === location}
                    onChange={() =>
                      location === "All"
                        ? handleFilterChange("location", location)
                        : handleSpecificFilterChange("location", location)
                    }
                  />
                  <label>{location}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h4>Category</h4>
            <div>
              {[
                "All",
                "Dance",
                "Music",
                "Fun",
                "Runway",
                "Culinary",
                "Artistry",
                "Drama",
                "Workshop",
              ].map((category) => (
                <div key={category}>
                  <input
                    type="checkbox"
                    checked={filters.category === category}
                    onChange={() =>
                      category === "All"
                        ? handleFilterChange("category", category)
                        : handleSpecificFilterChange("category", category)
                    }
                  />
                  <label>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Bubbles />

          <h2 className="event-container-title">Event List</h2>
          {filteredEvents.length === 0 ? (
            <p>No events match the selected filters.</p>
          ) : (
            <div className="event-grid">
              {filteredEvents.map(([key, event]) => (
                <div className="event-details-card" key={key}>
                  <div className="event-details-image">
                    <img src={event.imageUrl} alt={`${key} image`} />
                  </div>
                  <h3>{key}</h3>
                  <div className="event-tags-container">
                    <div className="event-tag">
                      <CalendarMonthIcon style={{ marginRight: "5px" }} />
                      {event.day}
                    </div>
                    <div className="event-tag">
                      <WatchLaterIcon style={{ marginRight: "5px" }} />
                      {`${event.start} - ${event.end}`}
                    </div>
                    <div className="event-tag">
                      <LocationOnIcon style={{ marginRight: "5px" }} />
                      {event.location}
                    </div>
                    <div className="event-tag">
                      <CategoryIcon style={{ marginRight: "5px" }} />
                      {event.category}
                    </div>
                    <div className="event-tag">
                      <GroupsIcon style={{ marginRight: "5px" }} />
                      {`Team Size: ${event.teamSize}`}
                    </div>
                    <div className="event-tag">
                      <GroupsIcon style={{ marginRight: "5px" }} />
                      {`Participation: ${event.Participation}`}
                    </div>
                  </div>
                  <button className="event-register-button">
                    View Event Details{" "}
                    <LaunchIcon style={{ marginLeft: "5px" }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-drawer">
          {["day", "location", "category"].map((key) => (
            <div
              key={key}
              className={`drawer-item ${drawerOpen === key ? "open" : ""}`}
            >
              <button
                className="drawer-toggle"
                onClick={() => toggleDrawer(key)}
              >
                {/* Conditionally render icons */}
                {key === "day" && (
                  <CalendarMonthIcon style={{ marginRight: "5px" }} />
                )}
                {key === "location" && (
                  <LocationOnIcon style={{ marginRight: "5px" }} />
                )}
                {key === "category" && (
                  <CategoryIcon style={{ marginRight: "5px" }} />
                )}
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>

              {/* Common Drawer Content */}
              <div className="drawer-content">
                {drawerOpen === "day" &&
                  ["All", "Feb 1", "Feb 2", "Feb 3", "Feb 4"].map((day) => (
                    <div key={day}>
                      <input
                        type="checkbox"
                        checked={filters.day === day}
                        onChange={() =>
                          day === "All"
                            ? handleFilterChange("day", day)
                            : handleSpecificFilterChange("day", day)
                        }
                      />
                      <label>{day}</label>
                    </div>
                  ))}

                {drawerOpen === "location" &&
                  [
                    "All",
                    "Main Bldg Quadrangle",
                    "Stage 2",
                    "Between Main & IT Building",
                    "Mech Circle",
                    "Instru Audi",
                    "KB Joshi Hall",
                    "Samstha Ground",
                  ].map((location) => (
                    <div key={location}>
                      <input
                        type="checkbox"
                        checked={filters.location === location}
                        onChange={() =>
                          location === "All"
                            ? handleFilterChange("location", location)
                            : handleSpecificFilterChange("location", location)
                        }
                      />
                      <label style={{ fontSize: "13px" }}>{location}</label>
                    </div>
                  ))}

                {drawerOpen === "category" &&
                  [
                    "All",
                    "dance",
                    "music",
                    "fun",
                    "runway",
                    "culinary",
                    "artistry",
                    "drama",
                    "workshop",
                  ].map((category) => (
                    <div key={category}>
                      <input
                        type="checkbox"
                        checked={filters.category === category}
                        onChange={() =>
                          category === "All"
                            ? handleFilterChange("category", category)
                            : handleSpecificFilterChange("category", category)
                        }
                      />
                      <label>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {isMobile && (
        <div className="floating-icon" onClick={toggleDrawer1}>
          <div className="floating-content">
            <span role="img" aria-label="menu">✨</span>
            <p>Menu</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default EventDetails;