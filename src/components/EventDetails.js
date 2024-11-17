import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/EventDetails.css';

function EventDetails() {
  const navigate = useNavigate();

  const handleKeyPress = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(path);
    }
  };

  return (
    <div>
      <header className="event-header">
        <h1>Groove Galas</h1>
      </header>

      <section className="posts">
        <div
          className="post"
          tabIndex="0"
          role="button"
          onClick={() => navigate('/street-groove')}
          onKeyPress={(e) => handleKeyPress(e, '/street-groove')}
        >
          <img
            src="https://www.panoramadance.com/files/2018/03/IMG_2563-scaled.jpg"
            alt="Street Groove Battle"
          />
          <div className="post-content">
            <h3>Street Groove Battle</h3>
          </div>
        </div>

        <div
          className="post"
          tabIndex="0"
          role="button"
          onClick={() => navigate('/solo-dance')}
          onKeyPress={(e) => handleKeyPress(e, '/solo-dance')}
        >
          <img
            src="https://www.footworksdance.com.au/dancestudio/wp-content/uploads/2018/04/AdobeStock_135133344_resized.jpeg"
            alt="Solo Dance Competitions"
          />
          <div className="post-content">
            <h3>Solo Dance Competition</h3>
          </div>
        </div>

        <div
          className="post"
          tabIndex="0"
          role="button"
          onClick={() => navigate('/intra-college-dance')}
          onKeyPress={(e) => handleKeyPress(e, '/intra-college-dance')}
        >
          <img
            src="https://editorial01.shutterstock.com/preview-440/13367315i/76a1a05f/Shutterstock_13367315i.jpg"
            alt="Intra-college Dance Competition"
          />
          <div className="post-content">
            <h3>Intra-college Dance Competition</h3>
          </div>
        </div>

        <div
          className="post"
          tabIndex="0"
          role="button"
          onClick={() => navigate('/classical-dance')}
          onKeyPress={(e) => handleKeyPress(e, '/classical-dance')}
        >
          <img
            src="https://th.bing.com/th/id/OIP.ivMWZMshxHcFtRNkm2CjtAHaE8?rs=1&pid=ImgDetMain"
            alt="Classical Dance Competition"
          />
          <div className="post-content">
            <h3>Classical Dance Competition</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;

