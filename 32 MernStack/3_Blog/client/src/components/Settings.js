import React from 'react';
import dp from '../images/dp.jpg'


export default function Settings() {
  return <div>
      <div className='container'>
      <form>
      <h2>Settings</h2>


      <img src={dp} class="img-rounded" alt="Cinque Terre" width="200" height="200"/>

      <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
</div>

<div class="mb-3">

  <label for="" class="form-label">Username</label>
  <input type="" class="form-control" id="" aria-describedby=""/>
</div>

<div class="mb-3">
  <label for="" class="form-label">Email</label>
  <input type="" class="form-control" id="" aria-describedby=""/>
</div>

<div class="mb-3">
  <label for="" class="form-label">Password</label>
  <input type="" class="form-control" id="" aria-describedby=""/>
</div>


<button type="submit" class="btn btn-primary">Update</button>
</form>
      </div>

  </div>;
}
