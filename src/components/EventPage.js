// components/EventPage.js
import React from "react";
import "../style/All-Events.css";

function EventPage({ event }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img src={event.image} alt={event.title} className="hero-image" />
        <div className="hero-content">
          <h1>{event.title}</h1>
          <h3>{event.subtitle}</h3>
        </div>
      </section>

      {/* Event Details Container */}
      <div className="event-container">
        {/* Event Details Section */}
        <section>
          <h2>Event Details</h2>
          <p>{event.details}</p>
        </section>

        {/* Competition Structure Section */}
        {event.structure && (
          <section>
            <h2>Competition Structure</h2>
            <ul>
              {event.structure.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            {event.structureNote && (
              <p className="note">
                <strong>Note:</strong> {event.structureNote}
              </p>
            )}
          </section>
        )}

        {/* Rules Section */}
        {event.rules && (
          <section>
            <h2>Rules</h2>
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Team Size Section */}
        {event.teamSize && (
          <section>
            <h2>Team Size</h2>
            <p>{event.teamSize}</p>
          </section>
        )}

        {/* Contact Coordinators Section */}
        <section className="contact-section">
          <h2>Contact Coordinators</h2>
          <ul>
            {event.contacts.map((contact, index) => (
              <li key={index}>
                <strong>{contact.name}:</strong> {contact.phone}
              </li>
            ))}
          </ul>
          <div className="register-button-container">
            <button
              className="register-button"
              onClick={() => window.location.href = event.registerLink}
            >
              Register
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EventPage;
