import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [headingText, setheadingText] = useState();

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setheadingText(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
