import React, { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { AccountSettings } from "./Sidebar/AccountSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./layout.css";
interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handlerButton = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const propstest = {
    isOpen,
    handlerButton
  };
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <Sidebar {...propstest} />
        <div className="w-full flex flex-wrap mb-8">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export { Layout };
