import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {login,logout} from '../../features/user-feature'
import { useNavigate } from 'react-router';


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(email,password)

    dispatch(login({currentUserEmail:email,userActive:true}))
    navigate("/")

  }


  return (
    <div>
      <div className="container">

      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-success">Login</button>
</form>
      </div>
    </div>
  );
}

export default Login;
