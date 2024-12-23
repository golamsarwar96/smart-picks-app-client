import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/shared/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Loading></Loading>;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;