import { Interpolation, Theme } from "@emotion/react";
import { PropTypes as ButtonPropTypes } from "components/UI/Buttons/LinkButton/types";
import { Key } from "react";

export interface ExtendedButtonPropTypes extends ButtonPropTypes {
  key: Key;
}

export type MediaOverlayTypes = {
  heading?: String;
  body?: String;
  buttonsArray?: Array<ExtendedButtonPropTypes>;
  extraContainerStyles?: (_theme: any) => Interpolation<Theme>;
  onButtonClickHandler?: any;
  customOverlayProps?: CustomOverlayChildrenPropTypes;
  type: OverlayTypes;
};

export enum OverlayTypes {
  HOME_LAYOUT = "HOME_LAYOUT",
  PRODUCT_LAYOUT = "PRODUCT_LAYOUT",
}

export type CustomOverlayChildrenPropTypes = {
  whatsappUrl: string;
  phoneNumber: string;
  onEmiClickHandler: Function;
  onClickDownloadBrochure: Function;
};