import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../features/theme'

export default function ThemeControl() {
    const dispatch = useDispatch();
    return (
        <div>
            <h6>Change theme</h6>

            <button onClick={()=>{
                dispatch(changeTheme({backgroundColor:"white",textColor:"black",txt:""}));
            }} type="button" class="btn btn-light">Light Theme</button>

            <button onClick={()=>{
                dispatch(changeTheme({backgroundColor:"black",textColor:"white",txt:""}));
            }} type="button" class="btn btn-dark">Dark Theme</button>
        </div>
    )
}
