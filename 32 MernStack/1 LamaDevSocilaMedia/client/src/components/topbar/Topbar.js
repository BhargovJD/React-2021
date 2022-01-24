import React from 'react';

export default function Topbar() {
  return <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Social</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Timeline</a>
        </li>


        <div class="container">
  <div class="row">
    <div class="col">
    <button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
  </span>
</button>
    </div>
    <div class="col">
    <button type="button" class="btn btn-primary position-relative">
  Notification
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
  </span>
</button>
    </div>
    <div class="col">
    <button type="button" class="btn btn-primary position-relative">
  Requset
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
  </span>
</button>
    </div>

    <div class="col">
    <img src="/assets/person/8.jpeg" style={{"height":"50px","width":"50px",}} class="img-circle rounded" alt="Cinque Terre"/>

    </div>
  </div>
</div>







      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>;
}
