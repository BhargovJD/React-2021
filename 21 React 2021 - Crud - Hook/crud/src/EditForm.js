import React,{useState} from 'react'

export default function EditForm(props) {
    const[value, setValue] = useState(props.task);

    const handleChnage = (e)=>{
        setValue(e.target.value);
    }

    const edit = (e)=>{
        e.preventDefault();
        props.editTodo(props.id, value);
        props.toggle();
    }
    return (
        <div>
            <form onSubmit={edit}>
                <input type="text" onChange={handleChnage} value={value}></input>
                <button>Update todo</button>
            </form>
        </div>
    )
}
