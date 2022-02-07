import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleSubmit = (e)=>{
      e.preventDefault()
      // console.log(`Email : ${email} and Password: ${password} and confirm password: ${confirmPassword}`)

      if(!email || !password || !confirmPassword){
        return toast.error("Please enter all the fields!")
    }

    if(password !== confirmPassword){
      return toast.error("Password do not match!")
  }



  }


    return <div>
      <br></br>

    <div className="container">
    <ToastContainer autoClose={2000} />

      <h3>Create your account</h3>
      <br></br>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input  onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1"/>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Confirm password</label>
        <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
    </div>

      </div>;
    }
