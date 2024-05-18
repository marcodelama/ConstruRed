import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userInfo")) || null;
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};
