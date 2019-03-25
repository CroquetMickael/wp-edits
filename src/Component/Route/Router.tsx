import Home from "../../Page/Home/Home.component";
import Test from "../../Page/Test/Test.component";
import Login from "../../Page/Login/Login.container";
import React from "react";
import { Router } from "@reach/router";
import { AuthProvider } from "../../Common/AuthContext";
import { PublicRoute, ProtectedRoute } from "../Route/Route";
import './route.css'
const Content = () => (
  <>
    <AuthProvider>
      <Router className="route-container">
        <PublicRoute component={Login} path="/" />
        <ProtectedRoute component={Home} path="/home" />
        <ProtectedRoute component={Test} path="/test" />
      </Router>
    </AuthProvider>
  </>
);

export default Content;
