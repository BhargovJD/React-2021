import React,{useContext, useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/auth-context';

export default function Login() {
    const {loginUser} = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e)=>{
        e.preventDefault()
        // console.log(`Email : ${email} and Password: ${password}`)

        if(!email || !password){
            toast.error("Please enter all the fields")
        }
        // try{
        //     await axios.post('http://localhost:8000/api/auth/login',{
        //         email,
        //         password
        //       })
        // }
        // catch(err){
        //     console.log(err)
        // }
    }



  return <div>
          <br></br>


<div className="container">
    <ToastContainer autoClose={2000} />
    <h3>Login</h3>
    <br></br>

<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' onChange={(e)=>setPassword(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>

  </div>;
}
