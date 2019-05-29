import React from "react";
import { Link, Match } from "@reach/router";
import { SidebarProps } from "./Sidebar.interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SidebarComponent = (props: SidebarProps) => (
  <div className="bg-white shadow w-1/3 md:w-1/4 border-r-2 border-grey">
    <ul className="list-reset text-center">
      
      {props.links.map((link, index: number) => (
        <li key={index}>
          <Match path={link.href}>
            {props => (
              <Link
                className={`block no-underline p-4 text-grey-darker font-bold 
                border-l-4 hover:border-blue ${
                  props.match ? "border-blue" : ""
                }`}
                to={link.href}
              >
               <FontAwesomeIcon className="mx-1" icon={link.icon} /> {link.libelle}
              </Link>
            )}
          </Match>
        </li>
      ))}
    </ul>
  </div>
);

export { SidebarComponent };
