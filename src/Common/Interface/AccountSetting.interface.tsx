export interface AccountSetting {
    newUrl: string;
    confirmNewUrl: string;
    newPassword: string;
    confirmNewPassword: string;
    newUsername: string;
    confirmNewUsername: string;
    handleUserNameChange: (event: Event | undefined) => void;
    handlePasswordChange: (event: Event | undefined) => void;
    handleUrlChange: (event: Event | undefined) => void;
    handleUserNameConfirmChange: (event: Event | undefined) => void;
    handlePasswordConfirmChange: (event: Event | undefined) => void;
    handleUrlConfirmChange: (event: Event | undefined) => void;
    changeUsername: (newUsername: string, confirmNewUsername: string) => void;
    changePassword: (newPassword: string, confirmNewPassword: string) => void;
    changeUrl: (newUrl: string, confirmNewUrl: string) => void; 
}
