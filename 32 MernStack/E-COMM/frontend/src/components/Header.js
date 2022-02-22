import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logout} from '../actions/login-actions'

function Header() {
  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const logoutHandler = () => {
   dispatch(logout())
   navigate("/login")
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link style={{ textDecoration: "none" }} to={`/`}>
            <a className="navbar-brand">ClickKart_</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link style={{ textDecoration: "none" }} to={"/cart"}>
                  <a className="nav-link " aria-current="page">
                    CART <i className="bi bi-bag-check-fill"></i>
                  </a>
                </Link>
              </li> */}

              {userInfo ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userInfo.name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                      <li>
                        <a className="dropdown-item">Profile</a>
                      </li>
                    </Link>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <li>
                        <a
                          onClick={logoutHandler}
                          className="dropdown-item text-danger"
                        >
                          Logout
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to={"/login"} style={{ textDecoration: "none" }}>
                    <a className="nav-link " aria-current="page">
                      LOG IN <i className="bi bi-person-circle"></i>
                    </a>
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
