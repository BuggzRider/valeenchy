import { NavbarItemColumnListTypes } from "config";
import { ReactElement } from "react";

export type NavbarPropTypes = {
  config: any;
};

export type NavbarItemsPropTypes = {
  config: Array<any>;
};

type NavbarItemList = {
  itemName: String;
  key: String;
  type: NavbarItemColumnListTypes;
  items?: Array<String>;
  imageUrl?: String;
};

export type NavbarItemProps = {
  config: Array<NavbarItemList>;
};

export type NavbarItem = {
  [x: number]: NavbarItemList;
};

export type NavItemsTypes = {
  links: Array<ReactElement>;
  hoveredItem: NavbarItem;
};
