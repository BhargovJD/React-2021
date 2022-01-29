import React,{useContext, useState,useEffect} from 'react';
import dp from '../images/dp.jpg'
import { Context } from './../context/Context';
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { login,logout } from '../features/User'
import {useSelector} from 'react-redux'



export default function Login() {



  const user = useSelector((state)=>state.user.value);


  const dispatch = useDispatch();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [error, setError] = useState("")
  // const {user, dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();

    // dispatch({type:"LOGIN_START"})


    try{
      const res  = await axios.post('http://localhost:5000/api/auth/login',{
        username,
        password
      })
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      dispatch(login({userInfo:res}));


    }
    catch(err){
      // dispatch({ type: "LOGIN_FAILURE" });
    }

  }

  console.log(user)
  // console.log(isFetching)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return <div>
      <div className='container'>


      <form onSubmit={handleSubmit}>
      <h2>Login</h2>



<div class="mb-3">

  <label for="" class="form-label">Username</label>
  <input onChange={(e)=>setUsername(e.target.value)} type="text" class="form-control" id="" aria-describedby=""/>
</div>


<div class="mb-3">
  <label for="" class="form-label">Password</label>
  <input onChange={(e)=>setPassword(e.target.value)} type="text" class="form-control" id="" aria-describedby=""/>
</div>


<button  type="submit" class="btn btn-primary">Login</button>
</form>
      </div>

  </div>;
}
