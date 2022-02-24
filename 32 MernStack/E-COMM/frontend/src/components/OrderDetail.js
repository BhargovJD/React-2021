import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";

function OrderDetail() {
  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [qty, setQty] = useState("");
  const [payment, setPayment] = useState("");
  const [total, setTotal] = useState("");
  const [orderby, setOrderby] = useState("");
  const [email, setEmail] = useState("");
  const [isPaid, setIsPaid] = useState("");
  const [isDeliver, setIsDeliver] = useState("");

  const [loadingg, setLoadingg] = useState(false);
  const [er, setEr] = useState("");

  //   const [sdkReady, setSdkReady] = useState(false);

  const { id } = useParams();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingg(true);
        const { data } = await axios.get(`/api/orders/${id}`, config);
        //   console.log(data);
        //   console.log(data.orderItems.name);
        //   console.log(data.orderItems.qty);
        //   console.log(data.payment);
        //   console.log(data.totalPrice);
        //   console.log(data.user.name);

        setName(data.orderItems.name);
        setImg(data.orderItems.image);
        setQty(data.orderItems.qty);
        setPayment(data.payment);
        setTotal(data.totalPrice);
        setOrderby(data.user.name);
        setEmail(data.user.email);
        setIsPaid(data.isPaid);
        setIsDeliver(data.isDelivered);

        setLoadingg(false);
      } catch (error) {
        // error.response.data.error.message;
        setEr(error);
        console.log(er);
      }
    };

    // const addPayPalScript = async () => {
    //   const { data: clientId } = await axios.get("/api/config/paypal");
    //   //   console.log(clientId);
    //   const script = document.createElement("script");
    //   script.type = "text/javascript";
    //   script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    //   script.async = true;
    //   script.onload = () => {
    //     setSdkReady(true);
    //   };
    //   document.body.appendChild(script);
    // };

    fetchPosts();
    // addPayPalScript();
  }, []);

  // Paypal
  const paymentHandler = (paymentResult) => {
    console.log(paymentResult);
  };

  return (
    <div className="container">
      <br></br>

      <div className="row">
        <h5 className="text-center">{er ? "Invalid request" : ""}</h5>
        <div className="col d-flex  justify-content-center">
          {loadingg ? (
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div class="card" style={{ width: "30rem" }}>
              <h4 className="text-center bg-secondary text-white">
                Order detail
              </h4>
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 style={{ textDecoration: "underline" }} class="card-title">
                  {name}
                </h5>
                <h6 class="card-title">Quantity: {qty}</h6>
                <h6 class="card-title">Ordered by: {orderby}</h6>
                <h6 class="card-title">
                  Email:{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </h6>
                <hr></hr>
                <h6 style={{ textDecoration: "underline" }}>
                  Payment information
                </h6>
                <h6 class="card-title">Price: Rupees {total} only</h6>
                <h6>
                  {isPaid ? (
                    <h6 className="text-success">Paid</h6>
                  ) : (
                    <h6 className="text-danger">Not paid</h6>
                  )}
                </h6>

                {/* <h6>{!isPaid ? <h6 className="text-success text-center">Pay now</h6> : ""}</h6>
              <h6>{!isPaid ? <PayPalButton amount={total} onSuccess={paymentHandler}/> : ""}</h6> */}

                <h6>
                  {isDeliver ? (
                    <h6 className="text-success">Deliverd</h6>
                  ) : (
                    <h6 className="text-danger">Not deliverd</h6>
                  )}
                </h6>

                <h6 class="card-title">Payment method: {payment}</h6>

                <div className="text-center text-success">
                  <h5>
                    <Link style={{textDecoration:"none",color:"green"}} to="/profile">
                      Your order has been placed.Track your orders
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
