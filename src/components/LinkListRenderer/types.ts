import { ArrayInterpolation, Theme } from "@emotion/react";
import {
  NavbarItemColumnListTypes,
  NavbarItemListTypes,
  NavbarItemTypes,
} from "config";

type NavbarItemList = {
  itemName: String;
  url: string;
  key: String;
  type: NavbarItemColumnListTypes;
  items?: Array<String>;
  imageUrl?: String;
};

export type LinkListRendererTypes = {
  displayName: String;
  url: string;
  key: String;
  type: NavbarItemTypes;
  listType?: NavbarItemListTypes;
  listItems?: NavbarItemList;
};

export type NavbarItemType = {
  config: LinkListRendererTypes;
  containerStyles?: (_theme: any) => ArrayInterpolation<Theme>;
  linkStyles?: (_theme: any) => ArrayInterpolation<Theme>;
};

export type NavbarItemPropTypes = {
  config: Array<LinkListRendererTypes>;
};
