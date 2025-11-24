import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { users, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p className="loading loading-spinner text-success"></p>;
  }
  if (users) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
