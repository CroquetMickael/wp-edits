import React from "react";
import { SidebarLink, SidebarProps } from "./Sidebar.interfaces";
import { SidebarComponent } from "./Sidebar.component";
const SidebarContainer = () => {
  const links: SidebarLink[] = [
    {
      href: "/home",
      libelle: "Home"
    },
    {
      href: "/newArticle",
      libelle: "Ecrire un article"
    },
    {
        href: "/blogConnect",
        libelle: "Votre blog"
    }
  ];

  const sidebarProps: SidebarProps = {
    links
  };
  return <SidebarComponent {...sidebarProps} />;
};

export { SidebarContainer };
