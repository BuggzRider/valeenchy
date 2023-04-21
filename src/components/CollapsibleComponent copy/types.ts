import { Interpolation, Theme } from "@emotion/react";
import { JSXElementConstructor, Key, ReactElement, ReactNode } from "react";
export type CollapsibleComponentListTypes = {
  triggerElement:
    | string
    | ReactElement<any, string | JSXElementConstructor<any>>;
  childElement: ReactNode;
  key: Key;
};

export type CollapsibleComponentPropsTypes = {
  items: Array<CollapsibleComponentListTypes>;
  styles: (theme: any) => Interpolation<Theme>;
};
