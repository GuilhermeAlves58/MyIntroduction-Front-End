import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const port = process.env.PORT;
const app = express();

const db = new pg.Client({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  items = result.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  const result = await db.query("INSERT INTO items (title) VALUES ($1)",[item]);
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  const result = await db.query("UPDATE items SET title = ($1) WHERE id = ($2)", [item, id]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  const result = await db.query("DELETE FROM items WHERE id = ($1)", [id]);
  
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
