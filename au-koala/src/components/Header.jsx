import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Mattresses",
    img: "//au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&width=1500",
  },
  {
    name: "Sofa Beds",
    img: "//au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&width=1500",
  },
  {
    name: "Sofas ▼",
    dropdownItems: [],
  },
  { name: "Bedroom ▼", img: "/images/bedroom.jpg" },
  { name: "Living Room ▼", img: "/images/living-room.jpg" },
  { name: "Outdoor ▼", img: "/images/outdoor.jpg" },
  { name: "Clearance", img: "/images/clearance.jpg" },
];

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  const sofaCategories = [
    { name: "Sofas", img: "//au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=1500" },
    { name: "Sofa Beds", img: "//au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&width=720" },
    { name: "Chaise Sofas", img: "//au.koala.com/cdn/shop/collections/5728f52223414ca8827313ef284077b0_ee5bee6d-97e3-4a65-8f6b-45220bf0baba.png?v=1742257301&width=1920" },
    { name: "Corner Sofas", img: "/images/corner-sofas.png" },
    { name: "Modular Sofas", img: "/images/modular-sofas.png" },
    { name: "Ottomans", img: "/images/ottomans.png" },
    { name: "Armchairs", img: "/images/armchairs.png" },
    { name: "Sofa Covers", img: "/images/sofa-covers.png" },
    { name: "Sofa Modules", img: "/images/sofa-modules.png" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Optional: detect changes to localStorage token across tabs
  useEffect(() => {
    const syncLoginState = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", syncLoginState);
    return () => window.removeEventListener("storage", syncLoginState);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          Try it properly with our 120-night trial • <a href="/">Learn more</a>
        </div>
        <div className="top-bar-right">
          <a href="/">FAQs</a>
          <a href="/">Trade</a>
          <a href="/">Manage my orders</a>
          <span role="img" aria-label="flag">🇦🇺</span>
        </div>
      </div>

      <header className="header">
        <div className="logo">
          <img
            src="https://cdn.shopify.com/s/files/1/0719/5430/1168/files/Logomark.svg?v=1747901710"
            alt="Koala logo"
          />
        </div>

        <nav className="navbar">
          {navItems.map((item, index) => (
            <div
              className="dropdown"
              key={index}
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={`/${item.name.replace(" ▼", "").toLowerCase().replace(/\s+/g, "-")}`}
                className="dropbtn"
              >
                {item.name}
              </Link>

              <div
                className="dropdown-content"
                style={{ display: activeDropdown === item.name ? "flex" : "none" }}
              >
                {item.dropdownItems ? (
                  <>
                    <div className="dropdown-items-list">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <div className="dropdown-item" key={subIndex}>
                          <img src={subItem.img} alt={subItem.name} />
                          <p>{subItem.name}</p>
                        </div>
                      ))}
                    </div>

                    {item.name === "Sofas ▼" && (
                      <div className="sofa-section-dropdown">
                        <h3>Shop Sofas</h3>
                        <div className="sofa-grid-dropdown">
                          {sofaCategories.map((cat, i) => (
                            <div className="sofa-item-dropdown" key={i}>
                              <img src={cat.img} alt={cat.name} />
                              <p>{cat.name}</p>
                            </div>
                          ))}
                        </div>
                        <button className="shop-all-btn-dropdown">SHOP ALL SOFAS</button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name.replace(" ▼", "")} Collection</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </nav>

        <div className="header-icons">
          <FaSearch className="icon" />

          {/* Login / Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm font-semibold px-4 py-1 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold px-4 py-1 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Login
            </Link>
          )}

          <FaUserCircle className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </header>
    </>
  );
}

export default Header;
