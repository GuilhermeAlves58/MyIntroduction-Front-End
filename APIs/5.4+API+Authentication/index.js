import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "18a6ec76-5cc1-493f-9f6d-d1c56ce73770";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = JSON.stringify(response.data);
    console.log(result);
    res.render("index.ejs", { content: result });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey",async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5, yourAPIKey,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  }catch (error){
    res.status(404).send(error.message);
  }

});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken",async (req, res) => {
  try{
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  }catch (error){
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
