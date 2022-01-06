import React,{useState} from 'react'

export default function UseState() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("type something...");

    const increment = ()=>{
        setCounter(counter +1);
    }

    const getInputValue = (e)=>{
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    return (
        <div>
            <div>
                {counter}
                <br></br>
                <button onClick={increment}>Increment</button>
            </div>
            <hr></hr>

            <div>
                <input type="text" onChange={getInputValue} placeholder="type something..."></input>
                <br></br>
                {inputValue}
            </div>

        </div>
    )
}
