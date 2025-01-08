import React, { useRef, useState } from "react";
import "../style/Srushti.css";
import gandhaarvideo from "../gandhaar_video.mp4";

const Launchpage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="fullscreen-video"
        autoPlay
        loop
        muted={isMuted}
      >
        <source src={gandhaarvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button in Top-Left */}
      <button className="control-button top-left" onClick={togglePlay}>
        {isPlaying ? "⏸️" : "▶️"} {/* Pause and Play Symbols */}
      </button>

      {/* Mute/Unmute Button in Bottom-Right */}
      <button className="control-button bottom-right" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"} {/* Mute and Sound Symbols */}
      </button>
    </div>
  );
};

export default Launchpage;
