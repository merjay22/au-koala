import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "", // ✅ Added mobile field
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required.");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!isLogin && !formData.mobile) {
      toast.error("Mobile number is required.");
      return;
    }

    try {
      setLoading(true);
      const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const url = isLogin
        ? `${baseURL}/api/login`
        : `${baseURL}/api/register`;

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile, // ✅ Add mobile in payload
            password: formData.password,
          };

      const res = await axios.post(url, payload);

      toast.success(res.data.message);

      if (isLogin && res.data.token) {
        localStorage.setItem("token", res.data.token);

        const decoded = JSON.parse(
          atob(res.data.token.split(".")[1])
        );
        console.log("Decoded JWT:", decoded);

        setTimeout(() => navigate("/"), 1000);
      }

      setFormData({
        name: "",
        email: "",
        mobile: "", // ✅ Reset mobile field
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("API Error:", error);
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Register"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block mb-1 text-sm font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-semibold">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit mobile number"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block mb-1 text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block mb-1 text-sm font-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-2 rounded-xl transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {loading
                ? isLogin
                  ? "Logging in..."
                  : "Registering..."
                : isLogin
                ? "Login"
                : "Register"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="text-blue-600 ml-1 underline"
              onClick={() => setIsLogin(!isLogin)}
              disabled={loading}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default AuthForm;
