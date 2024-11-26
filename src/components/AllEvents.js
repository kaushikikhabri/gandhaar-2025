// components/AllEvents.js
import React from "react";
import EventPage from "./EventPage";

// Event Details
const events = {
  missFreshers: {
    image: "https://www.panoramadance.com/files/2018/03/IMG_2563-scaled.jpg",
    title: "Miss Fresher's",
    subtitle: "Showcasing Talent and Elegance",
    details:
      "The Miss Fresher's competition is designed to celebrate talent, grace, and creativity among participants. Get ready to witness an exciting journey where students compete for the crown in a series of dynamic rounds.",
    structure: [
      "Initial participants: 36",
      "Round 1: Random pairing (36 → 18 participants)",
      "Round 2: Random pairing (18 → 9 participants)",
      "Round 3: Groups of three (9 → 3 participants)",
      "Final: Top 3 face off",
    ],
    structureNote: "The structure may change if there are fewer participants.",
    rules: [
      "Observe decency and avoid offensive remarks.",
      "Simple props are allowed but must be carried in and out before the performance.",
    ],
    teamSize: "1 participant per class",
    contacts: [
      { name: "Ashlesha Jagtap", phone: "9420482496" },
      { name: "Tejaswini Patkar", phone: "9730044087" },
    ],
    registerLink: "https://example.com/missfreshers-register",
  },
  danceBattle: {
    image:
      "https://th.bing.com/th/id/OIP.wcYjgTNMTVTELs4veDe1uwHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    title: "Street Dance Battle",
    subtitle: "Where Moves Speak Louder Than Words",
    details:
      "Join us for the ultimate street dance showdown! Show your best moves and compete for the title of the best street dancer.",
    structure: [
      "Preliminary Rounds: All participants",
      "Semi-Finals: Top 10 participants",
      "Finals: Top 3 participants",
    ],
    rules: [
      "No offensive choreography.",
      "Props are allowed but must be pre-approved.",
    ],
    teamSize: "1-3 members per team",
    contacts: [
      { name: "John Doe", phone: "9876543210" },
      { name: "Jane Smith", phone: "9876543211" },
    ],
    registerLink: "https://example.com/dancebattle-register",
  },
};

// Component to Display Events
function AllEvents({ eventKey }) {
  const event = events[eventKey];

  if (!event) {
    return <p>Event not found</p>;
  }

  return <EventPage event={event} />;
}

export default AllEvents;
