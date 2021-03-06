import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../actions/userAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/diary-notes");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));

    // try {
    //   setLoading(true);
    //   const { data } = await axios.post(
    //     "http://localhost:5000/api/users/login",
    //     {
    //       email,
    //       password,
    //     }
    //   );

    //   console.log(data);
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   setLoading(false);
    //   setError(false);
    // } catch (err) {
    //   //   console.log(err);
    //   if (err) {
    //     const er = "Something went wrong...";
    //     console.log(er, err);
    //     setLoading(false);
    //     setError(true);
    //   }
    // }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <h2 className="text-success">Login</h2> */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              {error ? (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                ""
              )}

              {loading ? (
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
