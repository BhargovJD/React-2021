import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'


import dp from '../images/dp.jpg'

export default function Topbar() {
  return <div>
      <nav class="navbar pt-3 navbar-light text-white bg-primary">
  <div class="container">


<div class="container">
  <div class="row">
    <div class="col">
    <button type="button" class="btn btn-light"><Link style={{"textDecoration":"none"
}} to="/">Home</Link></button>
    </div>

    <div class="col">
    <button type="button" class="btn btn-light"><Link style={{"textDecoration":"none"
}} to="/upload">Upload</Link></button>
    </div>

    <div class="col">
    <button type="button" class="btn btn-light"><Link style={{"textDecoration":"none"
}} to="/login">Login</Link></button>
    </div>

    <div class="col">
    <button type="button" class="btn btn-light"><Link style={{"textDecoration":"none"
}} to="/signup">Signup</Link></button>
    </div>


    <div class="col">
    <button type="button" class="btn btn-light"><Link style={{"textDecoration":"none"
}} to="/settings">Settings</Link></button>
    </div>



    <div class="col">
    <button type="button" class="btn btn-light">LOGOUT</button>
    </div>

    <div class="col">
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success " type="submit">Search</button>
      </form>
    </div>

    <div class="col">
        <a class="navbar-brand" href="#">
      <img class="rounded" src={dp} alt="" width="60" height="60"/>
    </a>
    </div>

  </div>
</div>


  </div>
</nav>
  </div>;
}
