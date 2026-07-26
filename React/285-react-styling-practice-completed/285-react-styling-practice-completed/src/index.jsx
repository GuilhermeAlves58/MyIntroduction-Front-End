import react from "react";
import ReactDOM from "react-dom/client";
import "./../public/styles.css";

const d = new Date();
const root = ReactDOM.createRoot(document.getElementById("root"));
let hour = d.getHours();
let message = "";
let colorOfGreeting = {
  color: "",
};

if (hour < 12) {
  message = "Good morning";
  colorOfGreeting.color = "red";
} else if (hour < 18) {
  message = "Good Afternoon";
  colorOfGreeting.color = "green";
} else {
  message = "Good evening";
  colorOfGreeting.color = "blue";
}

root.render(
  <h1 className="heading" style={colorOfGreeting}>
    {message}
  </h1>
);