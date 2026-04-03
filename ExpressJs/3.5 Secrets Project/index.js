import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


const acess = "ILoveProgramming";

app.use(bodyParser.urlencoded({extended: true}));

function passwordVerification(req, res, next){
    const password = req.body.password;
    req.isAuthorized = password === acess;
    next();
}

app.use(passwordVerification);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", passwordVerification, (req, res) => {
    if (req.isAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
