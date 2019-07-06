import React from "react";
import { InputComponent } from "../../Component/Input/input.component";
import { Layout } from "../../Component/Layout/Layout.component";
import { AccountSetting } from "../../Common/Interface/AccountSetting.interface";
import { ButtonComponent } from '../../Component/Button/Button.component'

const AccountSettingComponent = (props: AccountSetting) => (
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

      <ButtonComponent label="Change Username" 
      handler={() => props.changeUsername(props.newUsername, props.confirmNewUsername)} />      

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

      <ButtonComponent label="Change Password" 
      handler={() => props.changePassword(props.newPassword, props.confirmNewPassword)} />

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

      <ButtonComponent label="Change Url" 
      handler={() => props.changeUrl(props.newUrl, props.confirmNewUrl)} />

    </div>
  </Layout>
);

export { AccountSettingComponent };
