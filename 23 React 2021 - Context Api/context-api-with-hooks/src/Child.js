import React from 'react'
import { useContext } from 'react'
import {GlobalInfo} from './App'
import SuperChild from './SuperChild';

export default function Child() {
    const {textColor} = useContext(GlobalInfo);
    console.log(textColor);

    return (
        <div>
            <h1 style={{color:textColor}}>Child Component</h1>
            <SuperChild/>
        </div>
    )
}
