import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


function Navbar() {
    const navigate = useNavigate();


    const handleSignOut = ()=>{
        console.log("Signed out")
        navigate('/login')

    }
  return <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <Link style={{textDecoration:"none"}} to="/"><h5>Todos_App</h5></Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item">
          <a class="nav-link">Logged in as : Bhargov</a>
    </li>

    <li class="nav-item">

    <a onClick={()=>{handleSignOut()}}  class="nav-link link-danger text-danger" >Logout</a>
    </li>

    <li>
    <Link style={{textDecoration:"none"}} to="/login"><a class="nav-link text-primary">Login</a></Link>
    </li>

    <li>
    <Link style={{textDecoration:"none"}} to="/signup"><a  class="nav-link text-primary" >Signup</a></Link>
    </li>



      </ul>

    </div>
  </div>
</nav>

  </div>;
}

export default Navbar;
