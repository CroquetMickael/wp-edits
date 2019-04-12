import React, { FormEvent } from "react";
import "./input.css";

interface InputProps
  extends Readonly<{
    className: string;
    label: string;
    name: string;
    value: string;
<<<<<<< HEAD
    type: string;
=======
>>>>>>> master
    handler: (event: Event | undefined) => void;
  }> {}

const InputComponent = (props: InputProps) => (
<<<<<<< HEAD
  <div className={props.className}>
=======
  <div className="group">
>>>>>>> master
    <input
      className="appearance-none border-b border-b-2 border-grey 
      bg-transparent text-grey-darker 
      m-2 py-2 w-full px-2 leading-tight focus:outline-none focus:border-blue"
      type={props.type}
      name={props.name}
      placeholder={props.label}
      onChange={() => props.handler(event)}
      value={props.value}
      required
    />
  </div>
);

export { InputComponent };
