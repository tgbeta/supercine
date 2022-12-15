import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export default function ProtectedRoute({ children }) {
  const login = useContext(AppContext);
  console.log('loading', login);
  if(login.isLoading) {
    console.log('still loading', login.isLoading);
    return
  }
  if (!login.isLogIn) {
    console.log('not loading and not logged', login.isLogIn)
    return <Navigate to="/home" />;
  }
  console.log('not loading and logged', login.isLoading, login.isLogIn);
  return <>{children}</>;
}
