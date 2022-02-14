import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { incNumber, decNumber} from './../actions/index';

function Home() {
    const myState = useSelector((state)=>{return state.changeNumber})
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Redux Tutorial</h1>

        <button onClick={()=>dispatch(incNumber(5))}>Increase</button>

        <h1>{myState}</h1>

        <button onClick={()=>dispatch(decNumber())}>Decrease</button>

    </div>
  )
}

export default Home