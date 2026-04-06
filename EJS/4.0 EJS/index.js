import express from "express";

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const day = date.getDay();

let message = "";

console.log(day);
console.log(week[day]);


if( day >= 1 && day <= 5){
    message = "It's time to fulfill your duty";
    app.get("/", (req, res) => {
        res.render("index.ejs",{dayOfTheWeek: week[day] ,
            messageForYou: message});
    });
}else{
    message = "It's time to have fun";
    app.get("/", (req, res) => {
        res.render("index.ejs",{dayOfTheWeek: week[day] ,
            messageForYou: message});
    });
}