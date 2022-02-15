const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connDb = require("./config/db");

const app = express();
app.use(cors());

dotenv.config();
connDb();

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/api/diary-notes", (req, res) => {
  res.json({ notes });
});

app.get("/api/diary-notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  // res.json(req.params);
  res.send(note);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}`));
