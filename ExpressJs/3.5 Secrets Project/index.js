import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


const acess = "ILoveProgramming";
var autorised = false;

app.use(bodyParser.urlencoded({extended: true}));

function passwordVerification(req, res, next){
    const password = req.body.password;
    if( password === acess){
        autorised = true
    }
    next();
}

app.use(passwordVerification);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", (req, res) => {
    if (autorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
