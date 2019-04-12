import React from "react";
import { Link } from "@reach/router";
import { SidebarProps } from "./Sidebar.interfaces";

const SidebarComponent = (props: SidebarProps) => (
  <div className="bg-white shadow w-1/6 sm:w-1/5">
    <ul className="list-reset text-center">
      {props.links.map((link, index: number) => (
        <li key="index">
          <Link
            className="block p-4 text-grey-darker font-bold border-blue hover:bg-grey-lighter border-r-4"
            to={link.href}
          >
            {link.libelle}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export { SidebarComponent };
