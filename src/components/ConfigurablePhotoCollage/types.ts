/* eslint-disable no-unused-vars */
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
export type ConfigurablePhotoCollagePropType = {
  items: any;
  type: CONFIGURABLE_IMAGE_TYPE;
  isFiveCollageReversed?: boolean;
};

export enum CONFIGURABLE_IMAGE_TYPE {
  FIVE_IMAGE_COLLAGE = "FIVE_IMAGE_COLLAGE",
  THREE_IMAGE_COLLAGE = "THREE_IMAGE_COLLAGE",
  CUSTOM = "CUSTOM",
}
