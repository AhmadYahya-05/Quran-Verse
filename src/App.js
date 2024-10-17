import React, { useState } from "react";
import "./App.css";

function App() {
  const [verse, setVerse] = useState("");

  // Define emotion-verse mapping
  const emotionVerseMapping = {
    sadness: "Surah Ad-Duha (93:5) - 'And your Lord is going to give you, and you will be satisfied.'",
    fear: "Surah An-Nas (114:1-3) - 'Say, I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind.'",
    hope: "Surah Al-Baqarah (2:286) - 'Allah does not burden a soul beyond that it can bear...'",
    anger: "Surah Ash-Shura (42:37) - '...and when they are angry, they forgive.'",
    stress: "Surah Inshirah (94:6) - 'Indeed, with hardship comes ease.'",
  };

  // Handle button click
  const handleEmotionClick = (emotion) => {
    setVerse(emotionVerseMapping[emotion]);
  };

  return (
    <div className="App">
      <h1>Select Your Emotion</h1>
      <div className="button-container">
        {Object.keys(emotionVerseMapping).map((emotion) => (
          <button
            key={emotion}
            onClick={() => handleEmotionClick(emotion)}
            className="emotion-button"
          >
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </button>
        ))}
      </div>
      {verse && <p>{verse}</p>}
    </div>
  );
}

export default App;
