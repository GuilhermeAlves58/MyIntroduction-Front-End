import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const secrets = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {secret: secrets.data});
})

app.listen(port, () => {
    console.log("Server running");
})