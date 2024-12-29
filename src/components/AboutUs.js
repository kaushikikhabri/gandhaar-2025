// import React from "react";
// import "../style/AboutUs.css";

// const AboutUs = () => {
//   return (
//     <div id="container">
//       <div id="monitor">
//         <div id="monitorscreen">
//           <iframe
//             // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             src ="https://www.youtube.com/embed/9P153-soZH0"
//             title="YouTube video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import "../style/AboutUs.css";

const AboutUs = () => {
  return (
    <div id="AboutUsContainer">
      <div id="monitor-text-wrapper">
        {/* <div id="card"> */}
        <div id="monitor">
          <div id="monitorscreen">
            <iframe
              src="https://www.youtube.com/embed/9P153-soZH0"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* </div> */}
        <div id="text">
          <h1>Gandhaar </h1>
          <h2>A grand celebration of Culture and Talent</h2>
          <p>
          Gandhaar, the grand cultural fest of Cummins College of Engineering for Women, is a 4-day celebration of talent, creativity,
           and enthusiasm. It features competitions like group singing, dance, masterchef cooking, painting, mehendi, doodling, departmental
            antakshari, treasure hunt, and Cummins Got Talent, along with intercollegiate contests like dance battles and street plays. 
            Workshops boost creativity, while star-studded nights include Btech Fashion show, live performances by Artist, an electrifying 
            DJ night, the iconic Faculty Dance, and a grand Gandhaar dinner. The campus comes alive with vibrant energy, colorful decorations,
             and artistic brilliance, making Gandhaar an unforgettable experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
