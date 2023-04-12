import { Interpolation, Theme } from "@emotion/react";
import { PropTypes as ButtonPropTypes } from "components/UI/Button/types";
import { Key, ReactNode } from "react";

type ChildComponentTypes = {
  component: (props: any) => ReactNode;
  props: any;
};

export type ImageObject = {
  width: string;
  height: string;
  url: string;
  styles: (_theme: any) => Interpolation<Theme>;
  alt: string;
  childComponent: ChildComponentTypes;
};

export type ConfigurablePhotoCollagePropType = {
  items: Array<ImageObject>;
};

export interface ExtendedButtonPropTypes extends ButtonPropTypes {
  key: Key;
}

export type SingleImageContentPropType = {
  heading: String;
  body: String;
  buttonsArray: Array<ExtendedButtonPropTypes>;
};
