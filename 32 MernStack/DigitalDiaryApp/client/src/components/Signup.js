import React from "react";

function Signup() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-primary">New user? Register below</h5>
            <form>
              <div className="mb-3">
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-success">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
