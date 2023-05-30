import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
    const Navigate=useNavigate()
  const userLoggedIn = () => {
    const token = localStorage.getItem("token"); // User da login
    if (token) return true;
    return false;
  };

  if (!userLoggedIn()) {
    return Navigate("/Signin")
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;