const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connDb = require("./config/db");

const userRoutes = require('./routes/user-routes')
const diaryNotesRoutes = require("./routes/diary-notes-routes");

const app = express();
app.use(cors());
app.use(express.json());



dotenv.config();
connDb();

// app.get("/", (req, res) => {
//   res.send("This is home page");
// });

// app.get("/api/diary-notes", (req, res) => {
//   res.json({ notes });
// });

// app.get("/api/diary-notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   // res.json(req.params);
//   res.send(note);
// });

// Real
app.use("/api/users", userRoutes);
app.use("/api/diary-notes", diaryNotesRoutes);


const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}`));
