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
export type FiveImageCollagePropType = {
  items: Array<Item>;
  isReverseFlow?: Boolean;
};
