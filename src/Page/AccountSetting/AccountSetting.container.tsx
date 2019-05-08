import React, { useState } from "react";
import { AccountSettingUrlService } from "./AccountSettingUrl.service";
import { AccountSettingUsernameService } from "./AccountSettingUsername.service";
import { AccountSettingPasswordService } from "./AccountSettingPassword.service";
import { navigate } from "@reach/router";
import { AccountSettingComponent } from "./AccountSetting.component";

const AccountSettingContainer = () => {
  const [newUsername, setNewUsername] = useState<string>("");
  const [confirmNewUsername, setConfirmNewUsername] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [newUrl, setNewUrl] = useState<string>("");
  const [confirmNewUrl, setConfirmNewUrl] = useState<string>("");

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
  const changeUsername = (newUsername: string, confirmNewUsername:string) => {
    AccountSettingUsernameService(newUsername, confirmNewUsername);
    navigate("/accountSetting");
  };
  const changePassword = (newPassword: string, confirmNewPassword:string) => {
    AccountSettingPasswordService(newPassword, confirmNewPassword);
    navigate("/accountSetting");
  };
  const changeUrl = (newUrl: string, confirmNewUrl:string) => {
    AccountSettingUrlService(newUrl, confirmNewUrl);
    navigate("/accountSetting");
  };
  const AccountSettingProps = {
    handlePasswordChange: (event: Event | undefined) =>
      handlePasswordChange(event),
    handleUrlChange: (event: Event | undefined) => handleUrlChange(event),
    handleUserNameChange: (event: Event | undefined) =>
      handleUserNameChange(event),
    handleUserNameConfirmChange: (event: Event | undefined) =>
    handleUserNameConfirmChange(event),
    handlePasswordConfirmChange: (event: Event | undefined) =>
    handlePasswordConfirmChange(event),
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
    confirmNewUsername
  };

  return <>{<AccountSettingComponent {...AccountSettingProps} />}</>;
};

export { AccountSettingContainer };
