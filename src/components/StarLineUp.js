// StarLineUp single card code

// import React from "react";
// import "../style/StarLineUp.css";
// import concertImage from "../star_dev_images/concert.jpg";

// function StarLineUp() {
//   return (
//     <div className="star-lineup-container">
//       <h2>Star Line Up</h2>
//       <div className="star-gift-container">
//         <div className="star-gift">
//           <input type="checkbox" id="star-click" />
//           <label htmlFor="star-click" className="star-click"></label>
//           <div className="star-card-container">
//             <div className="star-card">
//               <div className="star-card-inner">
//                 <div className="star-card-front">
//                   <img src={concertImage} alt="Concert" />
//                 </div>
//                 <div className="star-card-back">
//                   <h3>Sing with the rhythm...</h3>
//                   <h1>Enjoy!!!</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StarLineUp;

/*********************************************************************************************************************************/

/*********************************************************************************************************************************/
// StarLineUp coming soon msg code

import React from "react";
import "../style/StarLineUp.css";

function StarLineUp() {
  return (
    <div className="star-lineup-container">
      <h2>Star Line Up</h2>
      <div className="star-gift-container">
        <div className="star-gift">
          <input type="checkbox" id="star-click" />
          <label htmlFor="star-click" className="star-click"></label>
          <div className="star-card-container">
            <div className="star-card">
              <h3>Coming Soon...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarLineUp;

/*********************************************************************************************************************************/

/*********************************************************************************************************************************/
// StarLineUp double card code

// import React, { useState } from "react";
// import "../style/StarLineUp.css";
// import concertImage from "../star_dev_images/concert.jpg";
// import macaw from "../star_dev_images/macaw_nav.jpeg";

// function StarLineUp() {
//   const [showFirstCard, setShowFirstCard] = useState(true);

//   const handleNextCard = () => {
//     setShowFirstCard(!showFirstCard);
//   };

//   return (
//     <div className="star-lineup-container">
//       <h2>Star Line Up</h2>
//       <div className="star-gift-container">
//         <div className="star-gift">
//           <input type="checkbox" id="star-click" />
//           <label htmlFor="star-click" className="star-click"></label>
//           {showFirstCard ? (
//             <div className="star-card-container">
//               <div className="star-card">
//                 <div className="star-card-inner">
//                   <div className="star-card-front">
//                     <img src={concertImage} alt="Concert" />
//                   </div>
//                   <div className="star-card-back">
//                     <h3>Sing with the rhythm...</h3>
//                     <h1>Enjoy!!!</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="star-card-container">
//               <div className="star-card">
//                 <div className="star-card-inner">
//                   <div className="star-card-front">
//                     <img src={macaw} alt="Macaw" />
//                   </div>
//                   <div className="star-card-back">
//                     <h3>Dance with the rhythm...</h3>
//                     <h1>Have Fun!!!</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//           <button onClick={handleNextCard} className="next-card-button">
//             {showFirstCard ? "Next Card" : "Previous Card"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StarLineUp;
