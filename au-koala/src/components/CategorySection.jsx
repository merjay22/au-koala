import React from "react";
import "./CategorySection.css"; 

const categories = [
  {
    name: "Mattresses",
    image: "//au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&width=1500",
  },
  {
    name: "Sofa Beds",
    image: "//au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&width=1500",
  },
  {
    name: "Bed Bases",
    image: "//au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=1500",
  },
  {
    name: "Sofas",
    image: "//au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=1500",
  },
];

const CategorySection = () => {
  return (
    <div className="category-section">
      <h2 className="category-title">Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
