import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user || user.role !== role) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
