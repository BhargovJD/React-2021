import React from 'react';
import dp from '../images/dp.jpg'
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'


export default function Post() {
  return <div className=' d-flex justify-content-center'>
      <div class="card " style={{"width": "25rem"}}>
  <img src={dp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Post title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link style={{"textDecoration":"none"
}} to="post-detail">Read full story</Link>
  </div>
</div>
<br></br>
  </div>;
}
