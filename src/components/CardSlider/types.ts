import { MediaFooterTypes } from "components/MediaContent/MediaFooterContent/types";
import { Key, MouseEventHandler } from "react";

export enum CARD_SLIDER_TYPES {
  IMAGE = "IMAGE",
  TEXT_CARD = "TEXT_CARD",
}
export type SlideTypes = {
  footerTextConfig?: MediaFooterTypes | any;
  src: string;
  url: string;
  alt: string;
  label?: string;
  key: Key;
};

export type CardSliderPropTypes = {
  slides: Array<SlideTypes>;
  type: CARD_SLIDER_TYPES;
  heading: String;
  containerStyles?: string;
  elementStyles?: string;
  cardSliderHeaderExtraStyles?: string;
  selectedItemStyles?: string;
  selectedOption?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  showHoveredText?: boolean;
};
