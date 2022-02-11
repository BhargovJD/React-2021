import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)


  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(name,email,password)

    try{
      setLoading(true)
      const res  = await axios.post('http://localhost:5000/api/signup',{
        name:name,
        email:email,
        password:password
      })

    // console.log(res.data)

    setLoading(false)
    navigate("/login")

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


        // setName("")
        // setEmail("")
        // setEmail("")

    }

  }

    return (
        <div>
          <div className="container">
          <ToastContainer
/>

<ToastContainer />
          <form onSubmit={handleSubmit}>

          <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label"><h5>Name</h5></label>
        <input  onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="" aria-describedby=""/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
        <input  onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
        <input  onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
      </div>

      {loading?<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<button type="submit" className="btn btn-success">Signup</button>}
      <p>Existing user?<Link to={"/login"}>Login here</Link></p>
    </form>
          </div>
        </div>
      );
    }


export default Signup;
