import "./styles.css";
import React, { useState } from "react";

function App() {
  const [countdown, setCountdown] = useState(10);

  const handleStartButtonClick = () => {
    // TODO: Start the countdown
  };

  return (
    <div>
      <h1>Countdown: {countdown}</h1>
      <button onClick={handleStartButtonClick}>Start</button>
    </div>
  );
}

export default App;
