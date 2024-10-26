import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "@/pages/Loader";
import { AuthContext } from "@/provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;