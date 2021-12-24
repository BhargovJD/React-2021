import React,{useState} from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);

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
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
        </div>
    )
}
