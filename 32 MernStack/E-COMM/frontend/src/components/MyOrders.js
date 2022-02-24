import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  useEffect(() => {
    const fetchOrders = async () => {
      const  res  = await axios.get("api/orders/orders/myorders", config);
      console.log(res.data);
      setOrders(res.data);
      console.log(orders)
    };

    fetchOrders();
  }, []);
  return <div>MyOrders</div>;
}

export default MyOrders;
