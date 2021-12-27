import React from 'react'
import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(3)

  const increase = () =>{
    setCount(count+1);
  }

  const decrease = () =>{
    setCount(count-1);
  }
    return (
        <div>
            <h1>{count}</h1>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">

  <button onClick={increase} type="button" class="btn btn-danger">+</button>

  <button onClick={decrease} type="button" class="btn btn-success">-</button>

</div>
        </div>
    )
}
