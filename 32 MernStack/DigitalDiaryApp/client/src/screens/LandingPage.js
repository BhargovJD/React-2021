import React from "react";

function LandingPage() {
  return (
    <div>
      <div classNameName="container">
        <h1 className="">Welcome to Digital Diary App</h1>
      </div>

      <br></br>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <h2 className="text-success">Login</h2> */}
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
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
        <br></br>
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

export default LandingPage;
