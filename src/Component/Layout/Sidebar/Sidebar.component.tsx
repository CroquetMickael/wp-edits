import React from "react";
import { Link, Match } from "@reach/router";
import { SidebarComponentProps } from "./Sidebar.interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccountSettings } from "./AccountSettings";
import "./sidebar.css";
const SidebarComponent = (props: SidebarComponentProps) => (
  <div
    className={`bg-white shadow w-1/3 md:w-1/4 border-r-2 border-grey Transition ${
      props.isOpen ? "SidebarNoActive" : ""
    }`}
  >
    <ul className="list-reset text-center">
      <li
        className="block no-underline p-4 text-grey-darker font-bold"
        onClick={props.handlerMenu}
      >
        <FontAwesomeIcon icon="bars" />
      </li>
      {props.links.map((link, index: number) => (
        <li key={index}>
          <Match path={link.href}>
            {props => (
              <Link
                className={`block no-underline p-4 text-grey-darker font-bold 
                border-r-4 hover:border-blue ${
                  props.match ? "border-blue" : ""
                }`}
                to={link.href}
              >
                <FontAwesomeIcon className="mx-1" icon={link.icon} />
                {link.libelle}
              </Link>
            )}
          </Match>
        </li>
      ))}
    </ul>
    <footer className="w-full text-center border-t border-grey p-4 pin-b">
      This is our footer
    </footer>
  </div>
);

export { SidebarComponent };
