import React,{useContext} from 'react'
import { CountContext } from './App';

export default function A() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <h2>Component A</h2>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button onClick={()=>countContext.countDispatch('increment')} type="button" class="btn btn-danger">Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')} type="button" class="btn btn-warning">Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')} type="button" class="btn btn-success">Reset</button>
            </div>

            <hr/>
        </div>
    )
}
