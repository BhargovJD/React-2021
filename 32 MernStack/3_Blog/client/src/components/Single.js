import React from 'react';
import dp from '../images/dp.jpg'

export default function Single() {
  return <div className=' d-flex justify-content-center'>
      <div class="card " style={{"width": "25rem"}}>
  <img src={dp} class="card-img-top" alt="..."/>
  <div class="card-body">

  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning">Edit</button>
  <button type="button" class="btn btn-danger">Delete</button>
</div>

    <h5 class="card-title">Post title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<br></br>
  </div>;
}
