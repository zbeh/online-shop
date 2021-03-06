import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const state = useSelector((state) => state.admin.isLogin);
  console.log(state);
  // const location = useLocation()
  if (state) {
    return <Navigate to="/admin-panel" />;
  }
  return children;
}
