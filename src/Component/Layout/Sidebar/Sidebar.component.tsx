import React from "react";
import { Link, Match } from "@reach/router";
import { SidebarProps } from "./Sidebar.interfaces";

const SidebarComponent = (props: SidebarProps) => (
  <div className="bg-white shadow w-1/3 md:w-1/4 border-r-2 border-grey">
    <ul className="list-reset text-center">
      {props.links.map((link, index: number) => (
        <li key={index}>
          <Match path={link.href}>
            {props => (
              <Link
                className={`block p-4 text-grey-darker font-bold 
                border-l-4 hover:border-blue ${
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
