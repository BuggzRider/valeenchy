import { NavbarItemColumnListTypes } from "config";

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
