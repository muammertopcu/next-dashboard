import {PropsWithChildren} from "react";

export interface SideBarProps extends PropsWithChildren {
  showMobileMenu: boolean;
  setShowMobileMenu: (showMobileMenu: boolean) => void;
}
