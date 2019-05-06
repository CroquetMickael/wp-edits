import React, { useState } from "react";
import { InitService } from "./Init.service";
import { navigate } from "@reach/router";
import { InitComponent } from "./InitComponent";

const InitContainer = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleUserNameChange = (event: Event | undefined) => {
    if (event && event.target) {
      setUsername((event.target as HTMLInputElement).value);
    }
  };

  const handlePasswordChange = (event: Event | undefined) => {
    if (event && event.target) {
      setPassword((event.target as HTMLInputElement).value);
    }
  };
  const handleUrlChange = (event: Event | undefined) => {
    if (event && event.target) {
      setUrl((event.target as HTMLInputElement).value);
    }
  };
  const init = (username: string, password: string, url: string) => {
    InitService(username, password, url);
    navigate("/");
  };
  const InitProps = {
    handlePasswordChange: (event: Event | undefined) =>
      handlePasswordChange(event),
    handleUrlChange: (event: Event | undefined) => handleUrlChange(event),
    handleUserNameChange: (event: Event | undefined) =>
      handleUserNameChange(event),
    init,
    password,
    url,
    username
  };

  return <>{<InitComponent {...InitProps} />}</>;
};

export { InitContainer };
