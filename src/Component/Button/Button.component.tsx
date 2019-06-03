import React from "react";

interface ButtonProps
  extends Readonly<{
    handler: () => void;
    label: string;
  }> { }

const ButtonComponent = (props: ButtonProps) => (

  <div className="mt-16">
    <div
      className="bg-blue cursor-pointer hover:bg-blue-dark text-center text-white font-bold p-2 mx-32 rounded"
      onClick={props.handler}
      
    >
      {props.label}
    </div>
  </div>
);

export { ButtonComponent };
