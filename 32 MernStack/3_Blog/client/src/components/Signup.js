import React,{useState} from 'react';
import axios from 'axios'


export default function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false)

    try{
      const res  = await axios.post('http://localhost:5000/api/auth/register',{
        username,
        email,
        password
      })

      res.data && window.location.replace('/login')

    }
    catch(err){
      setError(true)
    }

  }



  return <div>
      <div className='container'>

      <form onSubmit={handleSubmit}>


<div class="mb-3">

<h2>Sign up</h2>
  <label for="" class="form-label">Username</label>
  <input onChange={(e)=>setUsername(e.target.value)} type="" class="form-control" id="" aria-describedby=""/>
</div>

<div class="mb-3">

  <label for="" class="form-label">Email</label>
  <input onChange={(e)=>setEmail(e.target.value)} type="" class="form-control" id="" aria-describedby=""/>
</div>



<div class="mb-3">
  <label for="" class="form-label">Password</label>
  <input onChange={(e)=>setPassword(e.target.value)} type="" class="form-control" id="" aria-describedby=""/>
</div>


<button type="submit" class="btn btn-primary">Login</button>
{error && <span>Something went wrong</span>}
</form>
      </div>

  </div>;
}
