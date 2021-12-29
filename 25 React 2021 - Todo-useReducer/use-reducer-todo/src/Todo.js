import React from 'react'
import { useReducer, useState } from 'react';
import SingleTodo from './SingleTodo';

export const ACTIONS = {
    ADD_TODO:'add',
    TOGGLE_TODO: 'toggle',
    DELETE_TODO:'delete'

}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo=>{
                if(todo.id===action.payload.id){
                    return {...todo, complete:!todo.complete}
                }
                return todo;
            })

        case ACTIONS.DELETE_TODO:
                return todos.filter(todo=>todo.id !== action.payload.id);

        default:
            return todos;


    }
}

function newTodo(name){
    return {id:Date.now(), name:name, complete:false}
}


export default function Todo() {
    const [todos, dispatch] = useReducer(reducer,[]);
    const [name, setName] = useState();

    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName('');
    }

    console.log(todos);
    return (
        <div>
            <h2>Todo Example</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
            </form>

            {todos.map(todo=>{
                return <SingleTodo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    )
}
