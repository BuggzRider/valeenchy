import { Interpolation, Theme } from "@emotion/react";

export type ImageObject = {
  width: string;
  height: string;
  url: string;
  styles: (_theme: any) => Interpolation<Theme>;
  alt: string;
};

export type ConfigurablePhotoCollagePropType = {
  items: Array<ImageObject>;
};
