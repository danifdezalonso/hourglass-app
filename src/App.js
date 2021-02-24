import React from "react";
import Dashboard from "./pages/Dashboard.js";
import SignUpLogin from "./pages/SignUpLogin.js";

export default function App({ user }) {
  return <>{!user ? <SignUpLogin /> : <Dashboard />}</>;
}
