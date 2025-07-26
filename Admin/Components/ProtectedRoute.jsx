import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));

    if (!decoded?.isAdmin) {
      return <Navigate to="/admin/login" replace />;
    }

    return children;
  } catch (err) {
    console.error("Invalid token format:", err);
    return <Navigate to="/admin/login" replace />;
  }
};

export default ProtectedRoute;
