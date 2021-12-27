import React,{useContext} from 'react'
import { CountContext } from './App';

export default function F() {
    const countContext = useContext(CountContext)

    return (
        <div>
            <h2>Component F</h2>
            <button onClick={()=>countContext.countDispatch('increment')} type="button" class="btn btn-danger">Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')} type="button" class="btn btn-warning">Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')} type="button" class="btn btn-success">Reset</button>
        </div>
    )
}
