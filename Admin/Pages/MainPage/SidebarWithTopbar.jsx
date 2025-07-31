import React from "react";
import { FaHome, FaBox, FaMoneyBill, FaCog, FaQuestionCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// ⬅️ Sidebar + Topbar combined
const SidebarWithTopbar = ({ title, children }) => {
  const items = [
    { name: "Dashboard", icon: FaHome, path: "/admin/dashboard" },
    { name: "Orders", icon: FaBox, path: "/admin/orders" },
    { name: "Upload Product", icon: FaBox, path: "/admin/upload" },
    { name: "Payments", icon: FaMoneyBill, path: "/admin/payments" },
    { name: "Help", icon: FaQuestionCircle, path: "/admin/help" },
    { name: "Products", icon: FaBox, path: "/admin/products" },
    { name: "Settings", icon: FaCog, path: "/admin/settings" },
    
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Page</h1>
        <nav>
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-800 ${
                  isActive ? "bg-gray-800" : ""
                }`
              }
            >
              <item.icon />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center gap-3">
            <img
              src=""
              className="w-10 h-10 rounded-full"
              alt="Admin"
            />
            <span className="font-medium">Au.Koala</span>
          </div>
        </div>

        {/* Page content from parent */}
        {children}
      </div>
    </div>
  );
};

export default SidebarWithTopbar;
