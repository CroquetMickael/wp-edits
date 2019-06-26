import React, { useState, useContext } from "react";
import { AccountSettingsService } from "./AccountSetting.service";
import { navigate } from "@reach/router";
import { AccountSettingComponent } from "./AccountSetting.component";
import { AuthContext, AppContextInterface } from "../../Common/AuthContext/AuthContext";

const AccountSettingContainer = () => {

  const authValues: AppContextInterface = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState<string>("");
  const [confirmNewUsername, setConfirmNewUsername] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [newUrl, setNewUrl] = useState<string>("");
  const [confirmNewUrl, setConfirmNewUrl] = useState<string>("");

  const changePassword = (newPassword: string, confirmNewPassword: string ) => {
    AccountSettingsService(newPassword, confirmNewPassword, authValues.id, "password");
    navigate("/home");
  };
  const changeUrl = (newUrl: string, confirmNewUrl: string ) => {
    AccountSettingsService(newUrl, confirmNewUrl, authValues.id, "url");
    navigate("/home");
  };
  const changeUsername = (newUsername: string, confirmNewUsername: string ) => {
    AccountSettingsService(newUsername, confirmNewUsername, authValues.id, "login");
    navigate("/home");
  };  

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

  const AccountSettingProps = {
    authValues,
    changePassword,
    changeUrl,
    changeUsername,     
    confirmNewPassword,
    confirmNewUrl,
    confirmNewUsername,
    handlePasswordChange: (event: Event | undefined) =>
      handlePasswordChange(event),
    handlePasswordConfirmChange: (event: Event | undefined) =>
      handlePasswordConfirmChange(event),
    handleUrlChange: (event: Event | undefined) => 
      handleUrlChange(event),
    handleUrlConfirmChange: (event: Event | undefined) =>
      handleUrlConfirmChange(event),
    handleUserNameChange: (event: Event | undefined) =>
      handleUserNameChange(event),
    handleUserNameConfirmChange: (event: Event | undefined) =>
      handleUserNameConfirmChange(event),    
    newPassword, 
    newUrl,       
    newUsername    
  };

  return <>{<AccountSettingComponent {...AccountSettingProps} />}</>;
};

export { AccountSettingContainer };
