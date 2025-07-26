import React, { useState } from "react";
import "./BestsellersSection.css";

const categories = [
  "Featured",
  "Sofa Beds",
  "Mattresses",
  "Sofas",
  "Bed Bases",
  "Pillows",
  "Bookshelves",
];

const bestsellers = [
  {
    tag: "Best seller",
    image: "//au.koala.com/cdn/shop/files/c7f38088da30da2fde601b5913f53cce.png?v=1734316893&width=533",
    hoverImage: "//au.koala.com/cdn/shop/files/CushySofaBed_Gumleaf_Double_1-7MEyi5y1DgB0ROwzeyNpsD.jpg?v=1725435226&width=533",
    rating: 4.7,
    reviews: 1816,
    title: "Koala Sofa Bed",
    description: "2.5-Seater, 3 Sizes",
    priceUSD: 1390,
    colors: ["#3D4A45", "#CED0CB", "#E0DFD8", "#565654", "#888784", "#D4C2A4", "#9E5A44"],
  },
  {
    tag: "Most advanced",
    image: "//au.koala.com/cdn/shop/files/PlusMattress_4_1.jpg?v=1728227347&width=533",
    hoverImage: "//au.koala.com/cdn/shop/files/PlusMattress_1_1.jpg?v=1728227347",
    rating: 4.8,
    reviews: 773,
    title: "Koala Plus Mattress",
    description: "Queen, 6 Sizes",
    priceUSD: 1050,
    colors: [],
  },
  {
    tag: "Most awarded",
    image: "//au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_8_4d116212-f8a6-4c05-8988-32220645f3b5.png?v=1739506635&width=533",
    hoverImage: "//au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_1.jpg?v=1739505454&width=533",
    rating: 4.8,
    reviews: 2226,
    title: "Koala Mattress",
    description: "Queen, 5 Sizes",
    priceUSD: 890,
    colors: [],
  },
  {
    tag: "Upgraded",
    image: "//au.koala.com/cdn/shop/files/cb6557e64aa9e0b4caa665ec11c26cb4.png?v=1725498735&width=533",
    hoverImage: "//au.koala.com/cdn/shop/files/Greenwattle_3seater_1-3OKzAwBFg0ThpVaEjbLgm8.jpg?v=1725431902&width=533",
    rating: 4.7,
    reviews: 562,
    title: "Byron Sofa Bed",
    description: "3.5-Seater, 1 Size",
    priceUSD: 2290,
    colors: ["#795B4A", "#3D3E3F", "#B5A693", "#DED6C2", "#EEEDE9"],
  },
];

const USD_TO_INR = 83;

const BestsellersSection = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const convertToINR = (usd) => {
    return `₹${Math.round(usd * USD_TO_INR).toLocaleString("en-IN")}`;
  };

  return (
    <div className="bestsellers-section">
      <h2 className="bestsellers-title">Bestsellers</h2>
      <div className="category-menu">
        {categories.map((category) => (
          <button
            key={category}
            className={`menu-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="bestsellers-list">
        {bestsellers.map((item, index) => (
          <div
            key={index}
            className="bestseller-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.tag && <div className="tag">{item.tag}</div>}
            <img
              src={hoveredIndex === index && item.hoverImage ? item.hoverImage : item.image}
              alt={item.title}
              className="bestseller-image"
            />
            <div className="bestseller-details">
              <div className="rating">
                {"★".repeat(Math.floor(item.rating))} {item.rating} ({item.reviews})
              </div>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.description}</p>
              <p className="price">From {convertToINR(item.priceUSD)}</p>
              <div className="colors">
                {item.colors.map((color, i) => (
                  <span
                    key={i}
                    className="color-dot"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellersSection;
