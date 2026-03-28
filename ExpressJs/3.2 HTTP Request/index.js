import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("<H1>Home Page</H1>");
})

app.get("/about", (req,res) =>{
    res.send("<H1>About Me</H1>");
})

app.get("/contact", (req, res) =>{
    res.send("<H1>Contact</H1>")
})
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});