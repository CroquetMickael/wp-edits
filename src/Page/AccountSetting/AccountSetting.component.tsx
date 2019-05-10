import React from "react";
import { InputComponent } from "../../Component/Input/input.component";
import { Layout } from "../../Component/Layout/Layout.component";

interface AccountSettingComponentProps
  extends Readonly<{
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
  }> {}

  const AccountSettingComponent = (props: AccountSettingComponentProps) => (
    <Layout>
      <div className="bg-white">
        <InputComponent
          type="text"
          className="mx-32 my-6"
          handler={() => props.handleUserNameChange(event)}
          label="newUsername"
          name="newUsername"
          value={props.newUsername}
        />
        <InputComponent
          type="text"
          className="mx-32 my-6"
          handler={() => props.handleUserNameConfirmChange(event)}
          label="confirmNewUsername"
          name="confirmNewUsername"
          value={props.confirmNewUsername}
        />

        <div className="mt-16">
          <div
            className="bg-blue cursor-pointer hover:bg-blue-dark text-center text-white font-bold p-2 mx-32 rounded"
            onClick={() =>
              props.changeUsername(props.newUsername, props.confirmNewUsername)
            }
          >
            Change Username
          </div>
        </div>
        
        <InputComponent
          type="password"
          className="my-6 mx-32"
          handler={() => props.handlePasswordChange(event)}
          label="newPassword"
          name="newPassword"
          value={props.newPassword}
        />
        <InputComponent
          type="password"
          className="my-6 mx-32"
          handler={() => props.handlePasswordConfirmChange(event)}
          label="confirmNewPassword"
          name="confirmNewPassword"
          value={props.confirmNewPassword}
        />

        <div className="mt-16">
          <div
            className="bg-blue cursor-pointer hover:bg-blue-dark text-center text-white font-bold p-2 mx-32 rounded"
            onClick={() =>
              props.changePassword(props.newPassword, props.confirmNewPassword)
            }
          >
            Change Password
          </div>
        </div>

        <InputComponent
          type="text"
          className="my-6 mx-32"
          handler={() => props.handleUrlChange(event)}
          label="newUrl"
          name="newUrl"
          value={props.newUrl}
        />
        <InputComponent
          type="text"
          className="my-6 mx-32"
          handler={() => props.handleUrlConfirmChange(event)}
          label="confirmNewUrl"
          name="confirmNewUrl"
          value={props.confirmNewUrl}
        />

        <div className="mt-16">
          <div
            className="bg-blue cursor-pointer hover:bg-blue-dark text-center text-white font-bold p-2 mx-32 rounded"
            onClick={() =>
              props.changeUrl(props.newUrl, props.confirmNewUrl)
            }
          >
            Change blog URL
          </div>
        </div>

      </div>
    </Layout>
  );
  
  export { AccountSettingComponent };
  