import React from "react";
import { SidebarLink, SidebarProps } from "./Sidebar.interfaces";
import { SidebarComponent } from "./Sidebar.component";
const SidebarContainer = () => {
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

  const sidebarProps: SidebarProps = {
    links
  };
  return <SidebarComponent {...sidebarProps} />;
};

export { SidebarContainer };
