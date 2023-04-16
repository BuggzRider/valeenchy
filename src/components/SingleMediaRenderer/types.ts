import { Interpolation, Theme } from "@emotion/react";
import { MediaFooterTypes } from "components/MediaContent/MediaFooterContent/types";
import { MediaOverlayTypes } from "components/MediaContent/MediaOverlayContent/types";

export type SingleMediaTypes = {
  url: string;
  type: SingleMediaOptions;
  containerStyles: (_theme: any) => Interpolation<Theme>;
  mediaStyles?: (_theme: any) => Interpolation<Theme>;
  alt: string;
  shouldShowOverlay: Boolean;
  overlayTextConfig?: MediaOverlayTypes | any;
  footerTextConfig?: MediaFooterTypes | any;
};

export enum SingleMediaOptions {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}
