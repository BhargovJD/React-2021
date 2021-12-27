import React from 'react'
import { useContext } from 'react'
import {GlobalInfo} from './App'

export default function Other() {
    const {textColor} = useContext(GlobalInfo);
    
    console.log(textColor);

    return (
        <div>
            <h1 style={{color:textColor}}>Other Child Component</h1>
        </div>
    )
}
