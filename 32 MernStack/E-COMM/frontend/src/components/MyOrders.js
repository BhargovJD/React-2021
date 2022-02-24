import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "./../actions/orders-action";

function MyOrders() {
  const orderListReducer = useSelector((state) => state.orderListReducer);
  const { loading: orderLoading, error: orderError, orders } = orderListReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders);
  }, []);
  return <div>MyOrders</div>;
}

export default MyOrders;
