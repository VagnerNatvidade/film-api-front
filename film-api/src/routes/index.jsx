import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./App.routes";
import { AuthRoutes } from "./Auth.routes";

export function Routes() {
  const user = localStorage.getItem("@rocketnotes:user");

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
