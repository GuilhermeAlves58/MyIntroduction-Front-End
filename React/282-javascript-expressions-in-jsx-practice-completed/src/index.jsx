import react from "react";
import ReactDOM from "react-dom/client";

const ownerName = "Guilherme";
const date = new Date();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <p>Created by {ownerName}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>
);
