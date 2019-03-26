import React, { useState, Component, FunctionComponentElement } from "react";
import { navigate } from "@reach/router";
export interface AppContextInterface {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}
interface AuthProps {
  children: FunctionComponentElement<Component>;
}
const AuthContext = React.createContext<any>(null);

const AuthProvider = (props: AuthProps) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
    navigate("/home");
  };

  const logout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth: isAuth, login: login, logout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
