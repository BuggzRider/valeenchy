import { Key } from "react";

export type CollapsibleComponentListTypes = {
  heading: String;
  body: Array<String>;
  key: Key;
};

export type CollapsibleComponentPropsTypes = {
  items: Array<CollapsibleComponentListTypes>;
  heading: String;
};
