import { MouseEventHandler, ReactElement, ReactNode } from "react";

export type NavbarPropTypes = {
  config: any;
};

export type ExtraStylesTypes = {
  sidebarListWrapperExtraStyles?: Function;
  sidebarListContainerOpen: Function;
  sidebarChildrenExtraStyles?: Function;
};

export type SidebarPropTypes = {
  children: ReactNode;
  isSidebarOpen: boolean;
  onClose: MouseEventHandler;
  title: ReactElement;
  footer: ReactElement;
};
