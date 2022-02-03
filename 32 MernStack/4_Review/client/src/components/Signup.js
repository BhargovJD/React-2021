import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[pass, setPass] = useState("");

  const navigation = useNavigate();

  const[isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState(null)

  // console.log(title,desc)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // Send to backend
    // console.log("name"+name+"email"+ email+"password"+pass)

    try{

      setIsLoading(true)
      setError(null)

      const response = await fetch('http://localhost:5000/api/users/signup', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify({
          name:name,
          email:email,
          password:pass,
          "image":"img.jpg"
        })
      });
      const responseData =  await response.json()
      console.log(responseData);
      setError(responseData)

      // if(!response.ok){

      // }
    }

    catch(err){
      console.log(err)

      // setError(err.message || 'Something went wrong please try again...')
    }

    setIsLoading(false)



    // navigation("/login")
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




  {isLoading && <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>}
  <br></br>

  <button type="submit" className="btn btn-primary">Signup</button>
</form>
  </div>;
}
