
import React from 'react';
import '../style/StarLineUp.css';

const shows = [
  {
    name: 'Sabali Band',
    description: 'Experience the rhythm and soul with Sabali Band.',
    image: require('../images/sabali.jpg'),
  },
  {
    name: 'Stand-up Comedy Night',
    description: 'Get ready to laugh out loud with top comedians!',
    image: require('../images/comedy.jpg'),
  },
  {
    name: 'DJ Night',
    description: 'Dance to the best beats under the stars!',
    image: require('../images/dj.jpeg'),
  }
  //,
  // {
  //   name: 'Acoustic Evening',
  //   description: 'Unplug and unwind with soulful acoustic tunes.',
  //   image: require('../images/acoustic.jpg'),
  // },
];

function StarLineUp() {
  return (
    <div className="star-lineup-container">
      <h2 className="title">Star Line-Up</h2>
      <div className="lineup-grid">
        {shows.map((show, index) => (
          <div className="show-card" key={index}>
            <img src={show.image} alt={show.name} className="show-image" />
            <div className="show-info">
              <h3>{show.name}</h3>
              <p>{show.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarLineUp;
