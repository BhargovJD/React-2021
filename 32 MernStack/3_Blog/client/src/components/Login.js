import React,{useContext, useState} from 'react';
import dp from '../images/dp.jpg'
import { Context } from './../context/Context';
import axios from 'axios'


export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [error, setError] = useState("")
  const {user, dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();

    dispatch({type:"LOGIN_START"})


    try{
      const res  = await axios.post('http://localhost:5000/api/auth/login',{
        username,
        password
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    }
    catch(err){
      dispatch({ type: "LOGIN_FAILURE" });
    }

  }

  console.log(user)
  console.log(isFetching)

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


<button disabled={isFetching} type="submit" class="btn btn-primary">Login</button>
</form>
      </div>

  </div>;
}
