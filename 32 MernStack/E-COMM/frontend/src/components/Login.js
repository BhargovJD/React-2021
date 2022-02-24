import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../actions/login-actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              {error ? <h5 className="text-danger">{error}</h5> : ""}
              <input required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email address"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <input required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            {loading ? (
              <div className="text-center">
                <div class="spinner-border text-primary" role="status"></div>
              </div>
            ) : (
              <button type="submit" className="btn btn-primary text-center">
                Login
              </button>
            )}
          </form>
          <h5 className="">
            New user?
            <Link style={{ textDecoration: "none" }} to="/signup">
              {" "}
              Signup here
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
