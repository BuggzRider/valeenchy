import { MouseEventHandler } from "react";

export type ProductPageButtonProps = {
  onClick: MouseEventHandler;
  children?: any;
  isPrimary?: boolean;
  extraStyles?: string;
};
