import React, { useState } from "react";

function App() {
  const [time, setTime] = useState();

  function getTime() {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  return (
    <div className="container">
      <h1>{time ? time : "Time"}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
