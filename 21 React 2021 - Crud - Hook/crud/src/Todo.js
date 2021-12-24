import React,{useState} from 'react'
import EditForm from './EditForm';

export default function Todo(props) {
    const[isEditing, setIsEditing] = useState(false);

    const toggle = ()=>{
        setIsEditing(!isEditing);
    }


    const removeTodo = ()=>{
        props.removeTodo(props.id);
    }
    const toggleTodo = ()=>{
        props.toggleTodo(props.id);
    }
    return (
        <div>
            {isEditing ? <EditForm id={props.id} task={props.task} editTodo={props.editTodo} toggle={toggle}/> :
            <><li style={{textDecoration:props.completed?"line-through":"none"}}>{props.task}</li>
            <input type="checkbox"  checked={props.completed} onClick={toggleTodo}></input>
            <button onClick={removeTodo}>Delete</button>
            <button onClick={toggle} >Edit</button></>}

        </div>
    )
}
