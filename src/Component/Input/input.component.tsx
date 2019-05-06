import React, { FormEvent } from "react";

interface InputProps
  extends Readonly<{
    className: string;
    label: string;
    name: string;
    value: string;
    type: string;
    handler: (event: Event | undefined) => void;
  }> {}

const InputComponent = (props: InputProps) => (
  <div className={props.className}>
    <input
      className="appearance-none border-b-2 border-b border-grey bg-transparent 
      text-grey-darker m-2 py-2 leading-tight 
      focus:outline-none focus:border-blue w-full"
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
