import React from 'react';
import dp from "../images/dp.jpg"

export default function Sidebar() {
  return <div >

    <div className='text-center'>
        <hr></hr>
    <h5>About me</h5>
        <hr></hr>
        <a class="navbar-brand" href="#">
      <img class="rounded" src={dp} alt="" width="200" height="200"/>
    </a>
    </div>

    <div>
    <p class='text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
    <hr>
    </hr>
    <h5 className='text-center'>Explore Categories</h5>
    <hr></hr>

    <div class="container text-center">

  <div class="row">

    <div class="col-6">
      Muisc
    </div>

    <div class="col-6">
      Life
    </div>

  </div>
</div>

  </div>;
}
