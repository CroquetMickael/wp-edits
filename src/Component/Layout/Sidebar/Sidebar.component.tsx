import React from "react";
import { Link, Match } from "@reach/router";
import { SidebarComponentProps } from "./Sidebar.interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccountSettings } from "./AccountSettings";
import "./sidebar.css";
const SidebarComponent = (props: SidebarComponentProps) => (
  <div
    className={`flex flex-col Transition text-center ${
      props.isOpen ? "SidebarNoActive" : ""
    }`}
  >
    <div
      className="flex items-center justify-center no-underline 
      p-4 text-grey-darker text-center font-bold"
      onClick={props.handlerMenu}
    >
      <div
        className="flex items-center justify-center 
      rounded-full bg-white items-center justify-center h-8 w-8"
      >
        <FontAwesomeIcon icon="bars" />
      </div>
    </div>
    <ul
      className={`block flex flex-col list-reset text-center bg-white 
      shadow w-full h-full Transition ${
        props.isOpen ? "SidebarContentNoActive" : ""
      }`}
    >
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
      <div className="mt-auto" />
      <footer className="w-full text-center border-t border-grey mb-8 p-4">
        This is our footer
      </footer>
    </ul>

    <div />
  </div>
);

export { SidebarComponent };
