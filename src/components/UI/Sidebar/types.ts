import {  ReactNode } from "react";

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
  setIsSidebarOpen: Function;
  extraStyles: ExtraStylesTypes;
  closeButtonColor?: String;
};

