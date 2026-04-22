import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


const yourBearerToken = "18a6ec76-5cc1-493f-9f6d-d1c56ce73770";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  const secret = req.body;
  try{
    const result = await axios.post(API_URL + "/secrets", secret,config);
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body;
  try{
    const result = await axios.put(API_URL + "/secrets/" + searchId, secret,config);
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const score = req.body;
  try{
    const result = await axios.patch(API_URL + "/secrets/" + searchId, score,config);
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const result = await axios.delete(API_URL + "/secrets/" + searchId,config);
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
