import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[pass, setPass] = useState("");

  const navigation = useNavigate();



  // console.log(title,desc)

  const handleSubmit = (e) =>{
    e.preventDefault();
    // Send to backend
    console.log("name"+name+"email"+ email+"password"+pass)

    navigation("/login")
}



  return <div>
      <form onSubmit={handleSubmit}>
      <h2>Signup Required</h2>

      <div className="mb-3">
    <label  className="form-label">Name</label>
    <input required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setName(e.target.value)}}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setPass(e.target.value)}}/>
  </div>




  <button type="submit" className="btn btn-primary">Signup</button>
</form>
  </div>;
}
