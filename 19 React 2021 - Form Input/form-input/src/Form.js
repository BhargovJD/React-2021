import React,{useState, useEffect} from 'react'

export default function Form() {
    const [email, setEmail] = useState("");
    const [count, setCount] = useState(0);


    const handleCange = (e)=>{
        setEmail(e.target.value);
    }

    const clearInput = ()=>{
        setEmail("");
    }


    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const changeTitle = ()=>{
        setCount(count+1);
    }

    return (
        <div>
            <h1>The value is:{email}</h1>
            <input type='text' value={email} onChange={handleCange} ></input>
            <br/>
            <button onClick={clearInput}>Clear input</button>
            <br/>
            <button onClick={changeTitle}>Click me and check doc title</button>

        </div>
    )
}
