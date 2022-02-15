import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LandingPage() {
  return (
    <div>
      <div classNameName="container">
        <h1 className="">Welcome to Digital Diary App</h1>
      </div>

      <br></br>
      <Login/>
        <br></br>
      <Signup/>
    </div>
  );
}

export default LandingPage;
