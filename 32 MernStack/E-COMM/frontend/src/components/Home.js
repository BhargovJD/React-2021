import React from "react";
import products from "../products";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Latest Products</h1>
          {products.map((p) => (
            <div key={p._id} className="col-md-4 col-sm-6 col-6  py-3">
              {/* {p.name} */}
              <Product product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
