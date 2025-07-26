import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Navigate added
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Pages
import AdminLogin from "../Pages/AdminLogin";
import Dashboard from "../Pages/MainPage/Dashboard";
import UploadProduct from "../Pages/MainPage/UploadProduct";
import ProductList from "../Pages/MainPage/ProductList";
import Help from "../Pages/MainPage/Help";
import Settings from "../Pages/MainPage/Settings";

// ✅ Protected route wrapper
import ProtectedRoute from "../Components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        {/* 🔐 Public Route */}
        <Route path="/admin/login" element={<AdminLogin />} />


        {/* 🔒 Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/upload"
          element={
            <ProtectedRoute>
              <UploadProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/help"
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* ✅ Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
