import React,{useState,useContext} from 'react';
import { AuthContext } from '../context/authContext';
import { useNavigate } from "react-router-dom";


export default function Login() {
const auth = useContext(AuthContext);
const navigation = useNavigate();

const[isLoading, setIsLoading] = useState(false)



  const[email, setEmail] = useState("");
  const[pass, setPass] = useState("");



  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      setIsLoading(true)
      const response = await fetch('http://localhost:5000/api/users/login', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify({
          email:email,
          password:pass,
        })
      });

      const resData = await response.json()
      console.log(resData)
    }

    catch(err){
      console.log(err)
    }
    setIsLoading(false)

    auth.login(resData.user._id)

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
