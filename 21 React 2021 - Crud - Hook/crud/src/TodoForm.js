import React,{useState} from 'react'

export default function TodoForm(props) {
    const[value, setValue] = useState("");

    const handleChnage = (e)=>{
        setValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        props.addTodo(value);


        setValue("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChnage} value={value}></input>
                <button>Add todo</button>
            </form>
        </div>
    )
}
