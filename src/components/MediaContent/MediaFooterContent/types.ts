import { PropTypes as ButtonPropTypes } from "components/UI/Buttons/Button/types";
import { Key } from "react";

export interface ExtendedButtonPropTypes extends ButtonPropTypes {
  key: Key;
}

export type MediaFooterTypes = {
  heading: String;
  body: String;
  price: String;
};
