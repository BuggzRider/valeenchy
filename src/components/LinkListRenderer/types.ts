/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrayInterpolation, Theme } from "@emotion/react";
import { NavbarItemColumnListTypes } from "config";

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
};

export type NavbarItemType = {
  config: LinkListRendererTypes;
  containerStyles?: (_theme: any) => ArrayInterpolation<Theme>;
  linkStyles?: (_theme: any) => ArrayInterpolation<Theme>;
};

export type NavbarItemPropTypes = {
  config: Array<LinkListRendererTypes>;
};
