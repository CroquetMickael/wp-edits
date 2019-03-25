import React, { useState, useContext } from "react";
import LoginComponent from "./Login.component";
import { AuthContext, AppContextInterface } from "../../Common/AuthContext";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const authValues: AppContextInterface = useContext(AuthContext);

  const loginProps = {
    password: password,
    userName: userName,
    handlePasswordChange: (event: any) => handlePasswordChange(event),
    handleUserNameChange: (event: any) => handleUserNameChange(event),
    login: authValues.login
  };

  return <>{<LoginComponent {...loginProps} />}</>;
};

export default Login;
