import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await axios.get("api/users/profile", config);
      console.log(data.data);
      setName(data.data.name);
      setEmail(data.data.email);
    };
    fetchPosts();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Profile information</h3>
          <h5 className="text-secondary">Name: {name}</h5>
          <h5 className="text-secondary">Email: {email}</h5>
        </div>
        <div className="col-md-6">
          <h3>Order Information</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
