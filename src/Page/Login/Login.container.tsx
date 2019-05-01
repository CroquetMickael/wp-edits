import React, { useState, useContext } from "react";
import { LoginComponent } from "./Login.component";
import { AuthContext, AppContextInterface } from "../../Common/AuthContext/AuthContext";
const LoginContainer = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserNameChange = (event: Event | undefined) => {
    if (event && event.target) {
      setUserName((event.target as HTMLInputElement).value);
    }
  };

  const handlePasswordChange = (event: Event | undefined) => {
    if (event && event.target) {
      setPassword((event.target as HTMLInputElement).value);
    }
  };
  const authValues: AppContextInterface = useContext(AuthContext);

  const loginProps = {
    callback: authValues.callback,
    handlePasswordChange: (event: Event | undefined) =>
      handlePasswordChange(event),
    handleUserNameChange: (event: Event | undefined) =>
      handleUserNameChange(event),
    login: authValues.login,
    password: password,
    userName: userName
  };

  return <>{<LoginComponent {...loginProps} />}</>;
};

export { LoginContainer };
