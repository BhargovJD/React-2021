import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { listSingleProduct } from "./../actions/single-product-action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const [qty, setQty] = useState(1);
  let [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const productDetailReducer = useSelector(
    (state) => state.productDetailReducer
  );

  const { loading, product, error } = productDetailReducer;
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(
    () => {
      dispatch(listSingleProduct(id));
    },
    [dispatch],
    [id]
  );

  //for payment
  const [user, setUser] = useState("");
  const [orderItems, setOrderItems] = useState({});

  const [address, setAddrees] = useState("");
  const [city, setCity] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [country, setCountry] = useState("");

  const [payment, setPayment] = useState("");
  var [totalPrice, setTotalPrice] = useState();

  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/api/orders",
        {
          user: userInfo.id,

          orderItems: {
            product_id: product._id,
            name: product.name,
            image: product.image,
            qty: qty,
            price: price,
          },
          shippingAddress: {
            address: address,
            city: city,
            postalAddress: postalAddress,
            country: country,
          },
          payment: "Paypal",

          totalPrice: (product.price * qty).toFixed(2),
        },
        config
      );
      // console.log(data._id);
      navigate(`/orders/${data._id}`);
    } catch (error) {
      // error.response.data.error.message;
      // setEr(error.response.data.error.message);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <br></br>
      {loading ? (
        <div className="text-center">
          <div class="spinner-border text-primary" role="status"></div>
        </div>
      ) : error ? (
        <h2 className="text-center">{error}</h2>
      ) : (
        <div className="row">
          <div className="col d-flex  justify-content-center">
            <div>
              <Link to={"/"}>
                <button type="button" className="btn btn-secondary btn-sm mb-2">
                  Go back
                </button>
              </Link>
              <div className="card" style={{ width: "30rem" }}>
                {/* Link to = {`/product/${product._id}`} */}
                {/* <Link to={`/product/${product._id}`}> */}
                <img src={product.image} className="card-img-top" alt="..." />
                {/* </Link> */}
                <div className="card-body">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/product/${product._id}`}
                  >
                    <h5 className="card-title">{product.name}</h5>
                  </Link>

                  <span className="badge bg-light text-dark">
                    Rating: {product.rating}
                  </span>
                  {/* <p className="card-text">{product.description}</p> */}

                  <span className="badge bg-light text-dark">
                    Reviews: {product.numReviews}
                  </span>

                  <span className="badge bg-light text-dark">
                    Brand: {product.brand}
                  </span>

                  <span className="badge bg-warning text-white">
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </span>

                  <p className="bg-secondary text-white text-center-justify p-2 my-2">
                    {product.description}
                  </p>

                  {/* {
                  setPrice = ((product.price * qty).toFixed(2))

                  } */}

                  <span className="badge bg-light text-dark">
                    <h6>
                      Price: Rupees{": "}
                      {(product.price * qty).toFixed(2)} /- only
                    </h6>
                  </span>

                  {product.countInStock > 0 && (
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  )}
                  <hr></hr>
                  <form onSubmit={handleSubmitt}>
                    <h5>Shipping details</h5>
                    <h6>Shipping address</h6>
                    <div class="mb-3">
                      <input
                        required
                        onChange={(e) => setAddrees(e.target.value)}
                        value={address}
                        placeholder="Address"
                        type="name"
                        class="form-control"
                        id=""
                        aria-describedby=""
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        required
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        placeholder="City"
                        class="form-control"
                        id=""
                        aria-describedby=""
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        required
                        onChange={(e) => setPostalAddress(e.target.value)}
                        value={postalAddress}
                        placeholder="Postal address"
                        type="name"
                        class="form-control"
                        id=""
                        aria-describedby=""
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        required
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        placeholder="Country"
                        type="name"
                        class="form-control"
                        id=""
                        aria-describedby=""
                      />
                    </div>

                    <h6>Payment Method</h6>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckCheckedDisabled"
                        checked
                        disabled
                      />
                      <label class=" text-primary" for="">
                        Cash on delivery
                      </label>
                    </div>

                    <br></br>
                    <div className="row">
                      <div className="col">
                        <button
                          type="submit"
                          disabled={product.countInStock === 0}
                          className="btn btn-primary btn-sm mb-1"
                        >
                          PLACE ORDER
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
