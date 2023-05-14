import { MediaFooterTypes } from "components/MediaContent/MediaFooterContent/types";
import { Key } from "react";

export enum CARD_SLIDER_TYPES {
  IMAGE = "IMAGE",
  TEXT_CARD = "TEXT_CARD",
}
export type SlideTypes = {
  footerTextConfig?: MediaFooterTypes | any;
  src: string;
  url: string;
  alt: string;
  key: Key;
};

export type CardSliderPropTypes = {
  slides: Array<SlideTypes>;
  type: CARD_SLIDER_TYPES;
  heading: String;
  containerStyles?: string;
  elementStyles?: string;
};
