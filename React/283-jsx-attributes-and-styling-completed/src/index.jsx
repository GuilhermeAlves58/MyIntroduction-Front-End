import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">Things i like</h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="bacon"
      src="https://th.bing.com/th/id/R.5142eb1312f8066b47533480dea4c12b?rik=AJVvAMcqSSILSQ&pid=ImgRaw&r=0"
    />
    <img
      className="food-img"
      alt="jamon"
      src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
    />
  </div>,
  document.getElementById("root")
);

