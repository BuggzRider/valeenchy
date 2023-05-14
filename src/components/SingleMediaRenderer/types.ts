import { MediaFooterTypes } from "components/MediaContent/MediaFooterContent/types";
import { MediaOverlayTypes } from "components/MediaContent/MediaOverlayContent/types";

export type SingleMediaTypes = {
  url: string;
  type: SingleMediaOptions;
  containerStyles?: string;
  mediaStyles?: string;
  alt: string;
  shouldShowOverlay?: Boolean;
  overlayTextConfig?: MediaOverlayTypes | any;
  footerTextConfig?: MediaFooterTypes | any;
  fill?: Boolean;
  onClick?: any;
};

export enum SingleMediaOptions {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}
