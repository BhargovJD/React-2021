import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listOrders } from "./../actions/orders-action";

function Profile() {
  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;

  const orderListReducer = useSelector((state) => state.orderListReducer);
  const { loading: orderLoading, error: orderError, orders } = orderListReducer;

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loadingg, setLoadingg] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listOrders());
    const fetchPosts = async () => {
      setLoadingg(true);
      const data = await axios.get("api/users/profile", config);
      // console.log(data.data);
      setName(data.data.name);
      setEmail(data.data.email);
      setLoadingg(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5>Profile information</h5>
          {loadingg ? (
            <div
              class="spinner-border text-primary text-center"
              role="status"
            ></div>
          ) : (
            <div>
              <h5 className="text-secondary">Name: {name}</h5>
              <h5 className="text-secondary">Email: {email}</h5>
            </div>
          )}
        </div>
        <div className="col-md-9">
          <h3 className="text-center">My orders</h3>

          {orderLoading ? (
            <div>
              <h4>Loading...please wait</h4>
            </div>
          ) : (
            <table class="table table-striped">
              <div className="text-primary text-center">
                <h6>
                  {orders.length === 0
                    ? "Your order list is empty...order something amazing"
                    : ""}
                </h6>
              </div>

              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">DATE</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">PAID</th>
                  <th scope="col">DELIVERED</th>
                  <th scope="col">DETAILS</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>Rupees: {order.totalPrice} only</td>
                    <td>
                      {order.isPaid ? (
                        <h6 className="text-success">Paid</h6>
                      ) : (
                        <h6 className="text-danger">Not paid</h6>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        <h6 className="text-success">Delivered</h6>
                      ) : (
                        <h6 className="text-danger">Not delivered</h6>
                      )}
                    </td>

                    <td>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/orders/${order._id}`}
                      >
                        Click here
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
