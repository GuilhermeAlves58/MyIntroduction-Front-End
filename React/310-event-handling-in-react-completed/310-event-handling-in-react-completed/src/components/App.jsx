import React, { useState } from "react";

function App() {
  const [isShown, setIsShown] = useState();

  function mouseOver() {
    return setIsShown({ backgroundColor: "white" });
  }

  function mouseOut() {
    return setIsShown({ backgroundColor: "black" });
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={isShown} onMouseEnter={mouseOut} onMouseLeave={mouseOver}>
        Submit
      </button>
    </div>
  );
}

export default App;