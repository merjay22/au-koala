// src/components/MattressSection.jsx
import React, { useState } from "react";
import mattressData from "./data/mattressData";
import "./MattressSection.css";

const sizes = ["Queen", "Single", "King Single", "Double", "King", "Super King"];

const MattressSection = () => {
  const [selectedSize, setSelectedSize] = useState("Queen");

  const filtered = mattressData.filter(product =>
    product.sizes.includes(selectedSize)
  );

  return (
    <div className="section-wrapper">
      <div className="section-header">
        <h2>Australia's most awarded mattress brand</h2>
        <a href="#" className="see-all">See All</a>
      </div>

      <div className="size-filter">
        {sizes.map(size => (
          <button
            key={size}
            className={`size-pill ${selectedSize === size ? "active" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-img" />
            <div className="rating">
              {"★".repeat(5)} <span>{item.rating} ({item.reviews})</span>
            </div>
            <h4>{item.name}</h4>
            <p>{selectedSize}, {item.sizes.length} Sizes</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MattressSection;
