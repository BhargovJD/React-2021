import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {login,logout} from '../../features/user-feature'




function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const loggedUserEmail = useSelector((state)=>state.user.value)


    const handleSignOut = ()=>{
        console.log("Signed out")
        navigate('/login')

    }
  return <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <Link style={{textDecoration:"none"}} to="/"><h5>Todos_App</h5></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


      {loggedUserEmail.userActive?<li className="nav-item">
          <a className="nav-link">Logged in as :{loggedUserEmail.currentUserEmail}</a>
    </li>:""}

    {loggedUserEmail.userActive?<li className="nav-item">
      <Link style={{textDecoration:"none"}} to={`/login`}><a onClick={()=>{dispatch(login({currentUserEmail:""}))}}  className="nav-link link-danger text-danger" >Logout</a></Link>
    </li>:""}

    {!loggedUserEmail.userActive?<li>
    <Link style={{textDecoration:"none"}} to="/login"><a className="nav-link text-primary">Login</a></Link>
    </li>:""}

    {!loggedUserEmail.userActive?<li>
    <Link style={{textDecoration:"none"}} to="/signup"><a  className="nav-link text-primary" >Signup</a></Link>
    </li>:""}



      </ul>

    </div>
  </div>
</nav>

  </div>;
}

export default Navbar;
