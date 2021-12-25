import React from 'react'
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <div>
            {props.todos.map(todo=>(
            <ul class="list-group">
                   <Todo task={todo.task} key={todo.id} id={todo.id} completed={todo.completed} removeTodo={props.removeTodo} toggleTodo={props.toggleTodo}  editTodo={props.editTodo}/>
            </ul>
            ))}

        </div>
    )
}


