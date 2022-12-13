import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export default function ProtectedRoute({ children }) {
  const login = useContext(AppContext);
  console.log('login', login)
  if (!login.isLogIn) return <Navigate to="/Home" />;
  return <>{children}</>;
}
