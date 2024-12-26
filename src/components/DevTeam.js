// import React from "react";
// import "../style/DevTeam.css";
// import dev_images from "./dev_images";

// const DevTeam = () => {
//   return (
//     <div className="dev-background-container">
//       <h1 className="dev-team-title">Development Team</h1>

//       <div className="dev-team-container">
//         <img
//           className="earphones-image"
//           src="https://www.pngarts.com/files/8/Earbuds-PNG-Photo.png"
//           alt=""
//         />
//         <div className="dev-grid">
//           {Object.values(dev_images).map((dev, index) => (
//             <div key={index}>
//               <div className="dev-image-container">
//                 <div>
//                   <img
//                     src={dev.profileImage}
//                     alt={dev.name}
//                     className="dev-image"
//                   />
//                 </div>
//                 <div className="dev-info">
//                   <p>{dev.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevTeam;

import React from "react";
import "../style/DevTeam.css";

// Import all images
// import kaushikiImage from "../images/Kaushiki Khabri.jpg";
// import saiImage from "../images/Sai Ingole.jpg";
// import yashodaImage from "../images/Yashoda Kangle.jpg";
// import avasthiImage from "../images/Avasthi Jadhav.jpg";
// import mrunalImage from "../images/IMG_2330.jpg";
// import sameekshaImage from "../images/Sameeksha Tantak.jpg";

import kaushikiImage from "../images/Kaushiki.png";
import saiImage from "../images/sai.jpg";
import yashodaImage from "../images/yashoda.png";
import avasthiImage from "../images/Avasthi.png";
import mrunalImage from "../images/mrunal.png";
import sameekshaImage from "../images/Sameeksha.png";
import ieshaImage from "../images/isha.png";
import shrushtiImage from "../images/shrushti.png";
import purvaImage from "../images/purva.png";

const DevTeam = () => {
  const teamMembers = [
    { name: "Kaushiki Khabri", img: kaushikiImage },
    { name: "Sai Ingole", img: saiImage },
    { name: "Yashoda Kangle", img: yashodaImage },
    { name: "Avasthi Jadhav", img: avasthiImage },
    { name: "Mrunal Shinde", img: mrunalImage },
    { name: "Sameeksha Tantak", img: sameekshaImage },
    { name: "Srushti Nikam", img: shrushtiImage },
    { name: "Isha Bhule", img: ieshaImage },
    { name: "Purva Sarda", img: purvaImage },
  ];

  return (
    <div className="dev-team-body">
      <div className="dev-team-section">
        <h1>Meet Our Development Team</h1>
        <div className="dev-team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="dev-team-member">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevTeam;
