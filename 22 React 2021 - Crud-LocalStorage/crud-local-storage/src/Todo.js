import React,{useState} from 'react'
import EditForm from './EditForm';

export default function Todo(props) {

    const[isEditing, setIsEditing] = useState(false);


    const removeTodo = ()=>{
        props.removeTodo(props.id);
    }

    const toggleTodo = ()=>{
        props.toggleTodo(props.id);
    }

    const toggle = ()=>{
        setIsEditing(!isEditing);
    }


    return (
        <div>
            {isEditing ? <EditForm id={props.id} task={props.task} editTodo={props.editTodo} toggle={toggle}/> : <li  class="list-group-item"><h5 onClick={toggleTodo} style={{textDecoration:props.completed?"line-through":"none"}}>{props.task}</h5><span><button onClick={toggle} type="button" class="btn btn-link text-success">Edit</button></span>
                    <span><button type="button" class="btn btn-link text-danger" onClick={removeTodo}>Delete</button></span>
                    </li>}

        </div>
    )
}
