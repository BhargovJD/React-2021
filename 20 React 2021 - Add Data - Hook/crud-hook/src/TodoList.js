import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoText)=>{
        const newTodos = [...todos, todoText];
        setTodos(newTodos);

        console.log(...todos);
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}

export default TodoList
