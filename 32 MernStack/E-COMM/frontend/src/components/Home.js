import React, { useEffect, useState } from "react";
import Product from "./Product";

import { listProducts } from "./../actions/product-action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const productListReducer = useSelector((state) => state.productListReducer);

  const { loading, products, error } = productListReducer;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        {loading ? (
          <div className="text-center">
            <div class="spinner-border text-primary" role="status">
            </div>
          </div>
        ) : (
          <div className="row">
            <h1>Latest Products</h1>
            {products.map((p) => (
              <div key={p._id} className="col-md-4 col-sm-6 col-6  py-3">
                {/* {p.name} */}
                <Product product={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
