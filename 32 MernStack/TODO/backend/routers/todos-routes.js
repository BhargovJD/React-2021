const { Todo } = require("../models/todo-model");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

// CREATE POST
router.post("/", async (req, res) => {

  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    author: Joi.string().min(3).max(100).required(),
    a_id: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  })
  // .options({abortEarly:false})

  const{error}=schema.validate(req.body)
  if(error){
    return res.status(400).send(error.details[0].message)
  }


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


// GET TODOS
router.get("/", async(req,res)=>{
  // const todos= await Todo.find({author:"Bhargov"})
  // const todos= await Todo.find().sort({date:-1}).select({title:1})
  try{
    const todos= await Todo.find().sort({date:-1})
    res.send(todos)
  }
  catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
  }
})

// DELETE TODO
router.delete("/:id", async(req,res)=>{
  try{
    const todo = await Todo.findById(req.params.id)
    if(!todo){
      return res.status(404).send("Todo not found")
    }

    
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
    res.send(deletedTodo)
  }
  catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
  }
})


// EDIT TODO
// VALIDATION
router.put("/:id", async(req,res)=>{

  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    author: Joi.string().min(3).max(100).required(),
    a_id: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  })

  const{error}=schema.validate(req.body)
  if(error){
    return res.status(400).send(error.details[0].message)
  }

  // MAIN LOGIC
  try{
    const todo = await Todo.findById(req.params.id)
    if(!todo){
      return res.status(404).send("Todo not found")
    }

    const { title, author, a_id, isComplete, date } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {title, author, a_id, isComplete, date},{new: true})
    res.send(updatedTodo)
  }
  catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
  }
})

// PATCH

router.patch("/:id", async(req,res)=>{

  try{
    const todo = await Todo.findById(req.params.id)
    if(!todo){
      return res.status(404).send("Todo not found")
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {isComplete : !todo.isComplete},{new: true})

    res.send(updatedTodo)
  }
  catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
  }
})



module.exports = router;
