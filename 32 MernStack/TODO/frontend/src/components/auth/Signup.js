import React from 'react';

function Signup() {
    return (
        <div>
          <div className="container">
          <form>

          <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label"><h5>Name</h5></label>
        <input type="text" className="form-control" id="" aria-describedby=""/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>

      <button type="submit" className="btn btn-success">Signup</button>
    </form>
          </div>
        </div>
      );
    }


export default Signup;
