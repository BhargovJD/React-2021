const { Todo } = require("../models/todo-model");
const express = require("express");
const router = express.Router();

// Create post
 router.post("/", async (req, res) => {
  const { title, author, a_id, isComplete, date } = req.body;
  
  let todo = new Todo({
    title: title,
    author: author,
    a_id: a_id,
    isComplete: isComplete,
    date: date,
  });

  try {
    todo = await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});


module.exports = router;
