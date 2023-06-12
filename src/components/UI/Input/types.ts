import { ChangeEventHandler } from "react";

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  RADIO = "radio",
  TEXTAREA = "textarea",
}

export type InputPropTypes = {
  type: InputTypes;
  placeholder?: string;
  id?: string;
  required?: boolean;
  extraStyles?: boolean;
  label?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};
