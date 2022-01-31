import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

export default function Navigation() {
  const auth = useContext(AuthContext);

  const logoutHandler = (e) =>{
    auth.logout()
}

  return <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Review</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/">HOME</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/">ALL USERS</Link></a>
        </li>

       {auth.isLoggedIn && <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/u1/places">MY PLACES</Link></a>
        </li>}

        {auth.isLoggedIn && <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/places/new">ADD PLACE</Link></a>
        </li>}

        {!auth.isLoggedIn && <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/login">LOG IN</Link></a>
        </li>}

        {!auth.isLoggedIn && <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/signup">SIGN UP</Link></a>
        </li>}


        {auth.isLoggedIn && <li className="nav-item">
          <a onClick={logoutHandler} className="nav-link active" aria-current="page" href="#">Logout</a>
        </li>}




      </ul>

    </div>
  </div>
</nav>
  </div>;
}
