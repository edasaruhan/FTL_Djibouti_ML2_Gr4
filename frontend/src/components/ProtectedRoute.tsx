import { Navigate } from "react-router-dom";

// Define props to accept children explicitly
interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Placeholder for auth logic
const isAuthenticated = () => {
  // Replace with actual auth check, e.g., checking for a token in localStorage
  return !!localStorage.getItem("authToken");
};

// Use React.FC with the explicit props type
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>; // Render children directly
};

export default ProtectedRoute;
