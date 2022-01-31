import React,{useState,useContext} from 'react';
import { AuthContext } from '../context/authContext';
import { useNavigate } from "react-router-dom";


export default function Login() {
const auth = useContext(AuthContext);
const navigation = useNavigate();



  const[email, setEmail] = useState("");
  const[pass, setPass] = useState("");


  // console.log(title,desc)

  const handleSubmit = (e) =>{
    e.preventDefault();
    // Send to backend
    console.log("email"+ email+"password"+pass)

    auth.login()

    navigation("/")


}



  return <div>
      <form onSubmit={handleSubmit}>
      <h2>Login Required</h2>

  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setPass(e.target.value)}}/>
  </div>




  <button type="submit" className="btn btn-primary">Login</button>
</form>
  </div>;
}
