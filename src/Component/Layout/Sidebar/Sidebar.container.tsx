import React from "react";
import { SidebarLink, SidebarComponentProps } from "./Sidebar.interfaces";
import { SidebarComponent } from "./Sidebar.component";
interface SidebarProps {
  isOpen: boolean;
  handlerButton: () => void;
}
const SidebarContainer = (props: SidebarProps) => {
  const links: SidebarLink[] = [
    {
      href: "/home",
      icon: "home",
      libelle: "Home"
    },
    {
      href: "/newArticle",
      icon: "plus",
      libelle: "Ecrire un article"
    },
    {
      href: "/blogConnect",
      icon: "desktop",
      libelle: "Votre blog"
    }
  ];

  const sidebarProps: SidebarComponentProps = {
    links,
    isOpen: props.isOpen,
    handlerMenu: props.handlerButton
  };
  return <SidebarComponent {...sidebarProps} />;
};

export { SidebarContainer };
