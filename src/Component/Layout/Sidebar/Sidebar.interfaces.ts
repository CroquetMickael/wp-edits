import { Props } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SidebarLink {
  href: string;
  libelle: string;
  icon: IconProp;
}
export interface SidebarComponentProps {
  links: SidebarLink[];
  isOpen: boolean;
  handlerMenu: () => void;
}
