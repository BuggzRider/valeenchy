import { imageOverlay } from "./styles";
import { PropTypes } from "./types";

const ImageOverlay = ({ children }: PropTypes) => {
  return <div css={(theme: any) => imageOverlay(theme)}>{children}</div>;
};

export default ImageOverlay;
