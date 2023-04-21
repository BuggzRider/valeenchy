import { Interpolation, Theme } from "@emotion/react";
import { PropTypes as ButtonPropTypes } from "components/UI/Buttons/Button/types";
import { Key } from "react";

export interface ExtendedButtonPropTypes extends ButtonPropTypes {
  key: Key;
}

export type MediaOverlayTypes = {
  heading: String;
  body?: String;
  buttonsArray?: Array<ExtendedButtonPropTypes>;
  extraContainerStyles?: (_theme: any) => Interpolation<Theme>;
};
