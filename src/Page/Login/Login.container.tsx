import React, { useState, useContext } from "react";
import { LoginComponent } from "./Login.component";
import { AuthContext, AppContextInterface } from "../../Common/AuthContext";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (event: Event | undefined) => {
    setUserName((event!.target! as HTMLInputElement).value);
  };

  const handlePasswordChange = (event: Event | undefined) => {
    setPassword((event!.target! as HTMLInputElement).value);
  };
  const authValues: AppContextInterface = useContext(AuthContext);

  const loginProps = {
    password: password,
    userName: userName,
    handlePasswordChange: (event: Event | undefined) =>
      handlePasswordChange(event),
    handleUserNameChange: (event: Event | undefined) =>
      handleUserNameChange(event),
    login: authValues.login
  };

  return <>{<LoginComponent {...loginProps} />}</>;
};

export { Login };
