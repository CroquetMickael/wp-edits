import React from "react";
import { Link, Match } from "@reach/router";
import { SidebarProps } from "./Sidebar.interfaces";

const SidebarComponent = (props: SidebarProps) => (
  <div className="bg-white shadow w-1/6 sm:w-1/5">
    <ul className="list-reset text-center">
      {props.links.map((link, index: number) => (
        <li key="index">
          <Match path={link.href}>
            {props => (
              <Link
                className={`block p-4 text-grey-darker font-bold 
                border-r-4 hover:border-blue ${
                  props.match ? "border-blue" : ""
                }`}
                to={link.href}
              >
                {link.libelle}
              </Link>
            )}
          </Match>
        </li>
      ))}
    </ul>
  </div>
);

export { SidebarComponent };
