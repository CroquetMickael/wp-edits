import React from "react";
import { InputComponent } from "../../Component/Input/input.component";
import "./login.css";
interface LoginProps
  extends Readonly<{
    password: string;
    userName: string;
    handleUserNameChange: (event: Event | undefined) => void;
    handlePasswordChange: (event: Event | undefined) => void;
    login: () => void;
  }> {}

const LoginComponent = (props: LoginProps) => (
  <>
    <div className="container">
      <div className="card">
        <div className="half gradient-background">
          <div className="left gradient-background" />
        </div>
        <div className="half cleanarea">
          <h1>Login</h1>
          <InputComponent
            label={"Username"}
            name={"UserName"}
            handler={props.handleUserNameChange}
            value={props.userName}
          />
          <InputComponent
            label={"Password"}
            name={"password"}
            handler={props.handlePasswordChange}
            value={props.password}
          />
          <button className="login-button" onClick={props.login}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  </>
);

export { LoginComponent };
