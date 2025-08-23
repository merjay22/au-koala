import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://renderbackend-z5e7.onrender.com/api/login", {
        email,
        password,
      });

      const token = res.data.token;
      const decoded = JSON.parse(atob(token.split(".")[1]));

      if (decoded.isAdmin) {
        localStorage.setItem("token", token);
        toast.success("Logged in");
        navigate("/admin/dashboard");
      } else {
        toast.error("You are not an admin");
      }
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        {/* ✅ Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png" // Place your logo in Admin/public/logo.png
            alt="Admin Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* ✅ Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>

        {/* ✅ Login Form */}
        <form onSubmit={loginHandler} className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
