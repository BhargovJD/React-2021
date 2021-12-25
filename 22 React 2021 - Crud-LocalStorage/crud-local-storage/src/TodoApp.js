import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid';


export default function TodoApp() {

const initialTodos = JSON.parse(window.localStorage.getItem('todos')||"[]");

const [todos, setTodos] = useState(initialTodos);

// const [todos, setTodos] = useState([]);

  // Local storage
  useEffect(()=>{
    // alert("IN USE EFFECt");
    window.localStorage.setItem("todos",JSON.stringify(todos));
},[todos])


// Insert
const addTodo = (todoInput) =>{
    const newTodos = [...todos, {id:uuidv4(),task:todoInput,completed:false}];
    setTodos(newTodos);
    console.log(...todos);
}

 // Delete
 const removeTodo = (todoId)=>{
    const updatedTodos = todos.filter(todo=> todo.id !== todoId);
    setTodos(updatedTodos);
}

// Check and Un-Check
const toggleTodo = (todoId)=>{
    const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo,completed:!todo.completed}:todo );
    setTodos(updatedTodos);
}

// Edit
const editTodo = (todoId,updatedTask)=>{
    const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo,task:updatedTask}:todo );
    setTodos(updatedTodos);
    console.log("edit");
}


    return (
        <div>
            <TodoForm addTodo={addTodo}/>
            <br/>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}  editTodo={editTodo}/>

        </div>
    )
}
