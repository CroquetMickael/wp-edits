import React, { useState, Component, FunctionComponentElement } from "react";
import { navigate } from "@reach/router";
export interface AppContextInterface {
  callback: string;
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
  const [callback, setCallback] = useState("");
  const login = (username: string, password: string) => {
    if (username === "Hooks" && password === "Awesome") {
      setIsAuth(true);
      navigate("/home");
    }
    setCallback("Mauvais Username et/ou Mot de passe");
  };

  const logout = () => {
    setCallback("Vous êtes maintenant déconnecté");
    navigate("/");
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout,
        callback: callback
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
