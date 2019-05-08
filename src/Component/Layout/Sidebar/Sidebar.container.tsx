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
<<<<<<< HEAD
      href: "/blogConnect",
      icon: "desktop",
      libelle: "Votre blog"
    }
=======
        href: "/blogConnect",
        libelle: "Votre blog"
    },
    {
      href: "/accountSetting",
      libelle: "Account Setting"
  }
>>>>>>> feature(accountSetting) creation de la page de modification de compte
  ];

  const sidebarProps: SidebarComponentProps = {
    handlerMenu: props.handlerButton,
    isOpen: props.isOpen,
    links
  };
  return <SidebarComponent {...sidebarProps} />;
};

export { SidebarContainer };
