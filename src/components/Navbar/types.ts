import {
  NavbarItemColumnListTypes,
  NavbarItemListTypes,
  NavbarItemTypes,
} from "config";

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

export type NavbarItem = {
  displayName: String;
  key: String;
  type: NavbarItemTypes;
  listType?: NavbarItemListTypes;
  listItems?: NavbarItemList;
};

export type NavbarItemType = {
  config: NavbarItem;
};

export type NavbarItemPropTypes = {
  config: Array<NavbarItem>;
};
