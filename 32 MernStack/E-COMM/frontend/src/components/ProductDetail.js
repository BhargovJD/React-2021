import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { listSingleProduct } from "./../actions/single-product-action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const dispatch = useDispatch();

  const productDetailReducer = useSelector(
    (state) => state.productDetailReducer
  );

  const { loading, product, error } = productDetailReducer;
  const { id } = useParams();

  useEffect(
    () => {
      dispatch(listSingleProduct(id));
    },
    [dispatch],
    [id]
  );

  // console.log(error);

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

                  <span className="badge bg-warning text-white">
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </span>

                  <p className="bg-secondary text-white text-center-justify p-2 my-2">
                    {product.description}
                  </p>

                  <span className="badge bg-light text-dark">
                    <h6>Price: Rupees {product.price} /- only</h6>
                  </span>

                  <br></br>
                  <div className="row">
                    <div className="col text-center">
                      <button
                        type="button"
                        disabled={product.countInStock === 0}
                        className="btn btn-primary btn-sm mb-1"
                      >
                        ORDER NOW
                      </button>
                    </div>
                    <div className="col text-center">
                      <button
                        type="button"
                        disabled={product.countInStock === 0}
                        className="btn btn-success text-white btn-sm"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>

                  {/* <button
                  type="button"
                  disabled={product.countInStock === 0}
                  className="btn btn-primary btn-sm mb-1"
                >
                  ORDER NOW
                </button> */}
                  {/* <br></br>
                <button
                  type="button"
                  disabled={product.countInStock === 0}
                  className="btn btn-success text-white btn-sm"
                >
                  ADD TO CART
                </button> */}
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
