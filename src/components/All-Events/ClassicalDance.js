
import React from 'react';

function ClassicalDance()  {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://th.bing.com/th/id/OIP.ivMWZMshxHcFtRNkm2CjtAHaE8?rs=1&pid=ImgDetMain"
          alt="Street Groove Battle"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Miss Fresher's</h1>
          <h3>Showcasing Talent and Elegance</h3>
        </div>
      </section>

      {/* Event Details Container */}
      <div className="event-container">
        {/* Event Details Section */}
        <section>
          <h2>Event Details</h2>
          <p>
            The <b>Miss Fresher's</b> competition is designed to celebrate talent, grace, and creativity among participants. Get ready to witness an exciting journey where students compete for the crown in a series of dynamic rounds.
          </p>
          <p>
            This is not just a competition; it's an opportunity to showcase personality, creativity, and uniqueness. Don't miss this captivating event!
          </p>
        </section>

        {/* Competition Structure Section */}
        <section>
          <h2>Competition Structure</h2>
          <ul>
            <li>Initial participants: 36</li>
            <li>Round 1: Random pairing (36 → 18 participants)</li>
            <li>Round 2: Random pairing (18 → 9 participants)</li>
            <li>Round 3: Groups of three (9 → 3 participants)</li>
            <li>Final: Top 3 face off</li>
          </ul>
          <p className="note">
            <strong>Note:</strong> The structure may change if there are fewer participants.
          </p>
        </section>

        {/* Rules Section */}
        <section>
          <h2>Rules</h2>
          <ul>
            <li>Observe decency and avoid offensive remarks.</li>
            <li>Simple props are allowed but must be carried in and out before the performance.</li>
           
          
          </ul>
          <h2>Team Size</h2>
          <p>1 participant per class</p>
        </section>

     

          {/* Contact Coordinators Section */}
          <section className="contact-section">
          <h2>Contact Coordinators</h2>
          <ul>
            <li>
              <strong>Ashlesha Jagtap:</strong> 9420482496
            </li>
            <li>
              <strong>Tejaswini Patkar:</strong> 9730044087
            </li>
          </ul>
          <div className="register-button-container">
            <button className="register-button">Register</button>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ClassicalDance;
