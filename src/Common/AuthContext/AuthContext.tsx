import React, { useState, Component, FunctionComponentElement } from "react";
import { navigate } from "@reach/router";
import { AuthService } from "./AuthContext.service";
export interface AppContextInterface {
  callback: string;
  isAuth: boolean;
  login: () => void;
  logout: () => void;
  id: number;
}
interface AuthProps {
  children: FunctionComponentElement<Component>;
}

const AuthContext = React.createContext<any>(null);

const AuthProvider = (props: AuthProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [id, setID] = useState('');
  const [callback, setCallback] = useState('\u00A0');
  const login = (username: string, password: string) => {
    AuthService.login(username, password, setIsAuth, setCallback, setID);
  };

  const logout = () => {
    setCallback("Vous êtes maintenant déconnecté");
    navigate("/");
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{
        callback,
        id,
        isAuth,
        login,
        logout,
        id    
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
