import React from "react";
import { Link } from "react-router-dom";
import products from "../products";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p._id === id);

  return (
    <div className="container">
        <br></br>
      <div className="row">
        <div className="col d-flex justify-content-center">
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
                Reviews: {product.numReviews}
              </span>
              <br></br>
              <span className="badge bg-light text-dark">
                Rating: {product.rating}
              </span>
              {/* <p className="card-text">{product.description}</p> */}

              <span className="badge bg-light text-dark">
                Reviews: {product.numReviews}
              </span>

              <br></br>
              <span className="badge bg-light text-dark">
                <h6>Price: Rupees {product.price} /- only</h6>
              </span>

              <br></br>
              <button type="button" className="btn btn-success btn-sm">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
