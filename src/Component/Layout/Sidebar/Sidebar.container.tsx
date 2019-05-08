import React from "react";
import { SidebarLink, SidebarProps } from "./Sidebar.interfaces";
import { SidebarComponent } from "./Sidebar.component";
const SidebarContainer = () => {
  const links: SidebarLink[] = [
    {
      href: "/home",
      libelle: "Home",
      icon: "home"
    },
    {
      href: "/newArticle",
      libelle: "Ecrire un article",
      icon: "plus"
    },
    {
        href: "/blogConnect",
        libelle: "Votre blog",
        icon: "desktop"
    }
  ];

  const sidebarProps: SidebarProps = {
    links
  };
  return <SidebarComponent {...sidebarProps} />;
};

export { SidebarContainer };
