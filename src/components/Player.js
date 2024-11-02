import React, { useState, useEffect, useRef } from "react";
const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(
    new Audio("../songs/joyful-carnival-trumpet-232017.mp3")
  );

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      console.log("Paused the audio");
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play the audio:", error);
      });
      console.log("Playing the audio");
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress
  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    if (isPlaying) {
      audio.addEventListener("timeupdate", updateProgress);
    } else {
      audio.removeEventListener("timeupdate", updateProgress);
    }

    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, [isPlaying]);

  return (
    <div style={styles.playerCard}>
      <img
        src="https://via.placeholder.com/150"
        alt="Album Cover"
        style={styles.coverImage}
      />
      <div style={styles.infoContainer}>
        <h3 style={styles.title}>Song Title</h3>
        <button onClick={togglePlayPause} style={styles.playPauseButton}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

const styles = {
  playerCard: {
    width: "300px",
    padding: "20px",
    backgroundColor: "#282828",
    borderRadius: "10px",
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
  },
  coverImage: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: "18px",
    margin: "0",
  },
  playPauseButton: {
    backgroundColor: "#1DB954",
    color: "#FFF",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  progressBarContainer: {
    width: "100%",
    height: "5px",
    backgroundColor: "#555",
    borderRadius: "5px",
    overflow: "hidden",
    marginTop: "15px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1DB954",
    borderRadius: "5px",
    transition: "width 0.1s",
  },
};

export default Player;
