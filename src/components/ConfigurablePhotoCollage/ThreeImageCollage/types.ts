import { MediaFooterTypes } from "components/MediaContent/MediaFooterContent/types";
import { MediaOverlayTypes } from "components/MediaContent/MediaOverlayContent/types";
import { Key } from "react";

export type Item = {
  key: Key;
  url: string;
  alt: string;
  overlayTextConfig?: MediaOverlayTypes | any;
  footerTextConfig?: MediaFooterTypes | any;
};

export type ItemsObject = {
  landscape: Item;
  footerImg1: Item;
  footerImg2: Item;
};
export type ThreeImageCollagePropType = {
  items: ItemsObject;
};
