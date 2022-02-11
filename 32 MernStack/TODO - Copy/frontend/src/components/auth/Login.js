import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {login,logout} from '../../features/user-feature'
import { useNavigate } from 'react-router';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)



  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(email,password)

    try{
      setLoading(true)
      const res  = await axios.post('http://localhost:5000/api/login',{
        email,
        password
      })

      // console.log(res.data)

      dispatch(login({currentUserEmail:email,userActive:true}))
    navigate("/")

    setLoading(false)
    }
    catch(err){
      console.log(err.response)
      toast.error(err.response.data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
        setLoading(false)

    }

  }
    // dispatch(login({currentUserEmail:email,userActive:true}))
    // navigate("/")




  return (
    <div>
      <div className="container">
      <ToastContainer
/>

<ToastContainer />
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  {loading?<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>: <button type="submit" className="btn btn-success">Login</button>}
  <br>
  </br>
 <p>New user?<Link to={"/signup"}>Create an account here</Link></p>
</form>
      </div>
    </div>
  );
}

export default Login;
