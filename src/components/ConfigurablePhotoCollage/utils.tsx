import Button from "components/UI/Button";
import { MouseEvent } from "react";
import {
  singleImageContentBody,
  singleImageContentButton,
  singleImageContentButtonContainer,
  singleImageContentContainer,
  singleImageContentHeading,
  singleImageContentWrapper,
} from "./styles";
import { SingleImageContentPropType } from "./types";

export const SingleImageContent = ({
  heading,
  body,
  buttonsArray,
}: SingleImageContentPropType) => {
  const onButtonClickHandler = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <div css={(theme) => singleImageContentWrapper(theme)}>
      <div css={(theme) => singleImageContentContainer(theme)}>
        <h1 css={(theme) => singleImageContentHeading(theme)}>{heading}</h1>
        <p css={(theme) => singleImageContentBody(theme)}>{body}</p>
        {buttonsArray.length > 0 && (
          <div css={(theme) => singleImageContentButtonContainer(theme)}>
            {buttonsArray.map((button) => (
              <div
                key={button.key}
                css={(theme) => singleImageContentButton(theme)}
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
