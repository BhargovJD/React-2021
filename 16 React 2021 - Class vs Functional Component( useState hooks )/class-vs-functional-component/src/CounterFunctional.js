import React, {useState} from 'react'

export default function CounterFunctional() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    };
    return (
        <div>
            <h1>Functional Component</h1>
            <h2>The Count is: {count}</h2>
            <button onClick={increment}>Add 1</button>
        </div>
    )
}
