import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function SIgnup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [er, setEr] = useState("");

  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("api/users/signup", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      // error.response.data.error.message;
      setEr(error.response.data.error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Signup</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              {er ? <h5 className="text-danger">{er}</h5> : ""}
              <input
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
                type="name"
                class="form-control"
                id=""
                aria-describedby=""
              />
            </div>
            <div class="mb-3">
              <input
                required
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
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SIgnup;
