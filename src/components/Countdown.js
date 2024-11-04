// Countdown.js
import React, { useEffect, useState } from "react";
import "../style/Countdown.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [targetDate]);

  return (
    <div>
      <div
        style={{
          fontSize: "4em",
          fontWeight: "bold",
          padding: "30px",
          paddingBottom: "150px",
        }}
      >
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default Countdown;
