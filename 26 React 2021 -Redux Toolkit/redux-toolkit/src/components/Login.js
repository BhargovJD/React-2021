import React from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from '../features/User'

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(login({name:"Bhargov",age:25,email:"b@gmail.com"}));
            }}>Login</button>

<button onClick={()=>{
                dispatch(logout({name:"",age:0,email:""}));
            }}>Logout</button>
        </div>
    )
}
