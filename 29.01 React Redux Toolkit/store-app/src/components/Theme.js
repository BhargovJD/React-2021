import React,{useState} from 'react';
import { useDispatch } from 'react-redux'
import {changeTextColor } from '../features/theme/themeSlice'


export default function Theme() {
    const [color, setColor] = useState()

    const dispatch = useDispatch()


  return <div>
      <h3>Theme : Change Color</h3>
      <input onChange={(e)=>setColor(e.target.value)} type="text" placeholder="type a color name..."></input><br></br><br></br>

      <button onClick={() => dispatch(changeTextColor(color))} type="button" class="btn btn-success">Click to change color</button>
  </div>;
}
