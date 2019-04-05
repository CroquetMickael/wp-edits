import React from "react";
import { Sidebar } from "../Sidebar";
import "./layout.css";

const Layout = (props: any) => (
  <div className="h-screen">
    <div className="flex ">
      <Sidebar />
      <div className="w-full flex flex-wrap  h-screen">
        {props.children}
      </div>
    </div>
  </div>
);

export { Layout };
