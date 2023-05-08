import { css } from "@emotion/react";
import LinkButton from "components/UI/Buttons/LinkButton";
import {
  mediaOverlayContentBody,
  mediaOverlayContentButton,
  mediaOverlayContentButtonContainer,
  mediaOverlayContentContainer,
  mediaOverlayContentHeading,
  mediaOverlayContentWrapper,
} from "./styles";
import { MediaOverlayTypes, OverlayTypes } from "./types";
import { bounce } from "styles/keyframes";
import CustomOverlayChildren from "./customChildren";

const MediaOverlayContent = ({
  heading,
  body,
  buttonsArray = [],
  extraContainerStyles = () => css``,
  onButtonClickHandler,
  customOverlayProps,
  type = OverlayTypes.HOME_LAYOUT,
}: MediaOverlayTypes) => {
  const getLayout = (type: OverlayTypes) => {
    switch (type) {
      case OverlayTypes.HOME_LAYOUT:
        return (
          <div css={(theme) => mediaOverlayContentContainer(theme)}>
            <h1 css={(theme) => mediaOverlayContentHeading(theme)}>
              {heading}
            </h1>
            {body && (
              <p css={(theme) => mediaOverlayContentBody(theme)}>{body}</p>
            )}
            {buttonsArray.length > 0 && (
              <div css={(theme) => mediaOverlayContentButtonContainer(theme)}>
                {buttonsArray.map((button) => (
                  <div
                    key={button.key}
                    css={(theme) => mediaOverlayContentButton(theme)}
                  >
                    <LinkButton
                      onClickHandler={(e: any) =>
                        onButtonClickHandler(e, button.key)
                      }
                      extraStyles={() => css`
                        transition: all 1s ease;
                        &:before {
                          content: "";
                          position: absolute;
                          top: 39%;
                          left: -16px;
                          width: 9px;
                          height: 9px;
                          border-top: 1.5px solid white;
                          border-right: 1.5px solid white;
                          margin-right: 2px;
                          animation: ${bounce} 2s infinite;
                        }
                      `}
                      {...button}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case OverlayTypes.PRODUCT_LAYOUT:
        return customOverlayProps && <CustomOverlayChildren {...customOverlayProps} />;
    }
  };
  return (
    <div
      css={[
        (theme) => mediaOverlayContentWrapper(theme),
        (theme) => extraContainerStyles(theme),
      ]}
    >
      {getLayout(type)}
    </div>
  );
};

export default MediaOverlayContent;
