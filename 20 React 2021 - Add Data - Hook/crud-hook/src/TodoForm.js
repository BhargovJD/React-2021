import React, {useState} from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState("");

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        props.addTodo({
            id:Math.floor(Math.random()*10000),
            text:input,
        });

        // after sending data make input empty
        setInput("");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Add a todo" value={input}  onChange={handleChange}></input>
                <button>Add todo</button>
            </form>

        </div>
    )
}
