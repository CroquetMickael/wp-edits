import React from "react";
import './Titlebar.css'

interface TitleBarProps extends Readonly<{
    onMaximize: () => void;
    onMinimize: () => void;
    onClose: () => void;
}> {}

const Titlebar = (props: TitleBarProps) => (
  <div className="title-bar">
    <div className="title">wp-edits</div>

    <div className="title-bar-btns">
      <button onClick={props.onMinimize}>-</button>

      <button onClick={props.onMaximize}>+</button>

      <button  onClick={props.onClose} className="close-btn">x</button>
    </div>
  </div>
);

export default Titlebar;
