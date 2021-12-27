import React from 'react'
import { useContext } from 'react'
import {GlobalInfo} from './App'

export default function SuperChild() {
    const {textColor,getDay} = useContext(GlobalInfo);
    console.log(textColor);

    const day = "Monday";

    return (
        <div>
            <h1 style={{color:textColor}}>Super Child Component</h1>
            <button onClick={()=>getDay(day)}>Click</button>
        </div>
    )
}
