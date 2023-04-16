import { MediaFooterTypes } from "components/MediaContent/MediaFooterContent/types";
import { Key } from "react";

export enum CARD_SLIDER_TYPES {
  SQUARE_IMAGE = "SQUARE_IMAGE",
  CIRCLE_IMAGE = "CIRCLE_IMAGE",
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
};
