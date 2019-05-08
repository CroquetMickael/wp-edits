import React, { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { AccountSettings } from "./Sidebar/AccountSettings";
import "./layout.css";
interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => (
  <div className="h-screen">
    <div className="flex h-screen">
      <Sidebar />
      <AccountSettings />
      <div className="w-full flex flex-wrap mb-8">{props.children}</div>
    </div>
  </div>
);

export { Layout };
