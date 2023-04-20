import { css } from "@emotion/react";
import Button from "components/UI/Buttons/Button";
import { MouseEvent } from "react";
import {
  mediaOverlayContentBody,
  mediaOverlayContentButton,
  mediaOverlayContentButtonContainer,
  mediaOverlayContentContainer,
  mediaOverlayContentHeading,
  mediaOverlayContentWrapper,
} from "./styles";
import { MediaOverlayTypes } from "./types";

const MediaOverlayContent = ({
  heading,
  body,
  buttonsArray = [],
  extraContainerStyles = () => css``,
}: MediaOverlayTypes) => {
  const onButtonClickHandler = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <div
      css={[
        (theme) => mediaOverlayContentWrapper(theme),
        (theme) => extraContainerStyles(theme),
      ]}
    >
      <div css={(theme) => mediaOverlayContentContainer(theme)}>
        <h1 css={(theme) => mediaOverlayContentHeading(theme)}>{heading}</h1>
        {body && <p css={(theme) => mediaOverlayContentBody(theme)}>{body}</p>}
        {buttonsArray.length > 0 && (
          <div css={(theme) => mediaOverlayContentButtonContainer(theme)}>
            {buttonsArray.map((button) => (
              <div
                key={button.key}
                css={(theme) => mediaOverlayContentButton(theme)}
              >
                <Button
                  key={button.key}
                  isLink={button.isLink}
                  url={button.url || ""}
                  onClickHandler={onButtonClickHandler}
                  label={button.label}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaOverlayContent;
