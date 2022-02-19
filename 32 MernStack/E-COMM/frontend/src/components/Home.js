import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get("/api/products/");

      setProducts(data)
    };
    fetchProducts();
  }, []);

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
