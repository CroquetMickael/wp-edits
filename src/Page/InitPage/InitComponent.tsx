import React from "react";
import { InputComponent } from "../../Component/Input/input.component";
interface InitProps
  extends Readonly<{
    url: string;
    password: string;
    username: string;
    handleUserNameChange: (event: Event | undefined) => void;
    handlePasswordChange: (event: Event | undefined) => void;
    handleUrlChange: (event: Event | undefined) => void;
    Init: (username: string, password: string, url: string) => void;
  }> {}

const InitComponent = (props: InitProps) => (
  <>
    <div className="min-h-full justify-center items-center flex">
      <div className="w-full flex sm:flex-col lg:flex-row sm:items-center mx-32 sm:mx-6 h-72 ">
        <div className="w-1/2 loginimg bg-cover h-full" />
        <div className="w-1/2 bg-white h-full">
          <div className="bg-white">
            <div className="mx-6 mt-6">
              <h1 className=" mb-8 text-xl ">Welcome to wp-edits</h1>
            </div>
            <InputComponent
              type="text"
              className="mx-32 my-6"
              handler={() => props.handleUserNameChange(event)}
              label="username"
              name="username"
              value={props.username}
            />
            <InputComponent
              type="password"
              className="my-6 mx-32"
              handler={() => props.handlePasswordChange(event)}
              label="password"
              name="password"
              value={props.password}
            />
            <InputComponent
              type="text"
              className="my-6 mx-32"
              handler={() => props.handleUrlChange(event)}
              label="url"
              name="url"
              value={props.url}
            />
            <div className="mt-16">
              <div
                className="bg-blue cursor-pointer hover:bg-blue-dark text-center text-white font-bold p-2 mx-32 rounded"
                onClick={() =>
                  props.Init(props.username, props.password, props.url)
                }
              >
                Create account
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export { InitComponent };
