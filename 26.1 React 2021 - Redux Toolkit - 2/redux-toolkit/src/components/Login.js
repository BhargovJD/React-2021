import React from 'react'
import { useDispatch } from 'react-redux'
import { login} from '../features/user'

export default function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>{
                dispatch(login({name:"Bhargov Jyoti Das",username:"bhargovJD"}));
            }} type="button" class="btn btn-success">Send user information</button>

        </div>
    )
}
