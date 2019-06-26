import React, { useState, useContext } from "react";
import { AccountSettingsService } from "./AccountSetting.service";
import { navigate } from "@reach/router";
import { AccountSettingComponent } from "./AccountSetting.component";
import { AuthContext, AppContextInterface } from "../../Common/AuthContext/AuthContext";

const AccountSettingContainer = () => {

  const AuthValues: AppContextInterface = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState<string>("");
  const [confirmNewUsername, setConfirmNewUsername] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [newUrl, setNewUrl] = useState<string>("");
  const [confirmNewUrl, setConfirmNewUrl] = useState<string>("");
  const handlePasswordChange = (event: Event | undefined) => {
    if (event && event.target) {
      setNewPassword((event.target as HTMLInputElement).value);
    }
  };
  const handlePasswordConfirmChange = (event: Event | undefined) => {
    if (event && event.target) {
      setConfirmNewPassword((event.target as HTMLInputElement).value);
    }
  };
  const handleUserNameChange = (event: Event | undefined) => {
    if (event && event.target) {
      setNewUsername((event.target as HTMLInputElement).value);
    }
  };
  const handleUserNameConfirmChange = (event: Event | undefined) => {
    if (event && event.target) {
      setConfirmNewUsername((event.target as HTMLInputElement).value);
    }
  };  
  const handleUrlChange = (event: Event | undefined) => {
    if (event && event.target) {
      setNewUrl((event.target as HTMLInputElement).value);
    }
  };
  const handleUrlConfirmChange = (event: Event | undefined) => {
    if (event && event.target) {
      setConfirmNewUrl((event.target as HTMLInputElement).value);
    }
  };
  const changePassword = (newPassword: string, confirmNewPassword: string ) => {
    AccountSettingsService(newPassword, confirmNewPassword, AuthValues.id, "password");
    navigate("/home");
  };
  const changeUsername = (newUsername: string, confirmNewUsername: string ) => {
    AccountSettingsService(newUsername, confirmNewUsername, AuthValues.id, "login");
    navigate("/home");
  };  
  const changeUrl = (newUrl: string, confirmNewUrl: string ) => {
    AccountSettingsService(newUrl, confirmNewUrl, AuthValues.id, "url");
    navigate("/home");
  };
  
  const AccountSettingProps = {
    handlePasswordChange: (event: Event | undefined) =>
      handlePasswordChange(event),
    handlePasswordConfirmChange: (event: Event | undefined) =>
      handlePasswordConfirmChange(event),
    handleUrlChange: (event: Event | undefined) => 
      handleUrlChange(event),
    handleUserNameChange: (event: Event | undefined) =>
      handleUserNameChange(event),
    handleUserNameConfirmChange: (event: Event | undefined) =>
      handleUserNameConfirmChange(event),
    handleUrlConfirmChange: (event: Event | undefined) =>
      handleUrlConfirmChange(event),
    changeUsername,
    changePassword,
    changeUrl, 
    newUrl,
    confirmNewUrl,
    newPassword,
    confirmNewPassword,
    newUsername,
    confirmNewUsername,
    AuthValues
  };

  return <>{<AccountSettingComponent {...AccountSettingProps} />}</>;
};

export { AccountSettingContainer };
