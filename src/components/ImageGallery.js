import React, { useEffect, useState } from "react";
import "../style/ImageGallery.css";

// Your other code...

const ImageGallery = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Load the SDK
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = "YOUR_SPOTIFY_ACCESS_TOKEN"; // Replace with your token
      const newPlayer = new window.Spotify.Player({
        name: "Web Playback SDK Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      // Connect to the player!
      newPlayer.connect().then((success) => {
        if (success) {
          console.log(
            "The Web Playback SDK successfully connected to Spotify!"
          );
        }
      });

      setPlayer(newPlayer);
    };
  }, []);

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pause();
      } else {
        player.resume();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Add logic to update progress...

  return (
    <div className="image-gallery">
      <div className="music-card">
        <h2>Music Performances</h2>
        <p>Relive the rhythm and excitement of our past music events!</p>
        <div className="music-player">
          {/* Add Album Cover, Track Info, and Play Button */}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
