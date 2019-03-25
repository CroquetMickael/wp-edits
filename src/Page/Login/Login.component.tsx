import React from "react";
import Input from "../../Component/Input/input.component";
import "./login.css";
interface LoginProps
  extends Readonly<{
    password: string;
    userName: string;
    handleUserNameChange: (event: any) => void;
    handlePasswordChange: (event: any) => void;
    login: () => void;
  }> {}

const Login = (props: LoginProps) => (
  <>
    <div className="container">
      <div className="card">
      <div className="half gradient-background">
        <div className="left gradient-background">
        </div>
        </div>
        <div className="half cleanarea">
          <h1>Login</h1>
          <Input
            label={"Username"}
            name={"UserName"}
            handler={props.handleUserNameChange}
            value={props.userName}
          />
          <Input
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

export default Login;
