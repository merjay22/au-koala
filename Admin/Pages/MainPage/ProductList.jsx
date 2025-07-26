import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p>₹ {product.price}</p>
          <img src={`http://localhost:5000/uploads/${product.image}`} alt="product" className="w-32 mt-2" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
