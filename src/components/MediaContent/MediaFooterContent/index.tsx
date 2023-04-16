import {
  mediaFooterContentBody1,
  mediaFooterContentBody2,
  mediaFooterContentContainer,
  mediaFooterContentHeading,
} from "./styles";
import { MediaFooterTypes } from "./types";

const MediaFooterContent = ({ heading, body, price }: MediaFooterTypes) => {
  return (
    <div css={(theme) => mediaFooterContentContainer(theme)}>
      <h1 css={(theme) => mediaFooterContentHeading(theme)}>{heading}</h1>
      <p css={(theme) => mediaFooterContentBody1(theme)}>{body}</p>
      <p css={(theme) => mediaFooterContentBody2(theme)}>{price}</p>
    </div>
  );
};

export default MediaFooterContent;
