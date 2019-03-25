import React from "react";
import "./input.css";

interface InputProps
  extends Readonly<{
    label: string;
    name: string;
    value: string;
    handler: (event: any) => void;
  }> {}

const inputComponent = (props: InputProps) => (
  <div className="group">
    <input
      type="text"
      name={props.name}
      onChange={() => props.handler(event)}
      value={props.value}
      required
    />
    <span className="highlight" />
    <span className="bar" />
    <label>{props.label}</label>
  </div>
);

export default inputComponent;