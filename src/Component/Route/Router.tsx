import { Home } from "../../Page/Home";
import { BlogConnect } from "../../Page/BlogConnect";
import { Init } from "../../Page/InitPage";
import { Login } from "../../Page/Login";
import { Article } from "../../Page/Article";
import React from "react";
import { Router } from "@reach/router";
import { AuthProvider } from "../../Common/AuthContext/AuthContext";
import { PublicRoute, ProtectedRoute } from "../Route/Route";
import "./route.css";
export const Content = () => (
  <>
    <AuthProvider>
      <Router className="route-container">
        <PublicRoute component={Login} path="/" />
        <PublicRoute component={Init} path="/initUser" />
        <ProtectedRoute component={Home} path="/home" />
        <ProtectedRoute component={BlogConnect} path="/blogConnect" />
        <ProtectedRoute component={Article} path="/article/:articleId" />
      </Router>
    </AuthProvider>
  </>
);
