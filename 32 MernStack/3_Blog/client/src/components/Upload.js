import React from 'react';
import dp from '../images/dp.jpg'


export default function Upload() {
  return <div>
      <div className='container'>
      <form>
      <h2>Upload a new post</h2>


      <img src={dp} class="img-rounded" alt="Cinque Terre" width="200" height="200"/>

      <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
</div>

<div class="mb-3">

  <label for="" class="form-label">Title</label>
  <input type="" class="form-control" id="" aria-describedby=""/>
</div>

<div class="mb-3">
  <label for="" class="form-label">Description</label>
  <input type="" class="form-control" id="" aria-describedby=""/>
</div>


<button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>

  </div>;
}
