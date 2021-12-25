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
                <div class="mb-3">
                    <input  onChange={handleChnage} value={value} type="text" class="form-control" id="text" placeholder='Add a todo...'/>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
