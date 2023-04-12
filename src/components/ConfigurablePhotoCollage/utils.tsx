import Button from "components/UI/Button";
import { MouseEvent } from "react";
import { singleImageContentContainer } from "./styles";
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
    <div css={(theme) => singleImageContentContainer(theme)}>
      <h2>{heading}</h2>
      <p>{body}</p>
      {buttonsArray.length > 0 && (
        <div>
          {buttonsArray.map((button) => (
            <Button
              key={button.key}
              isLink={button.isLink}
              url={button.url || ""}
              onClickHandler={onButtonClickHandler}
              label={button.label}
            />
          ))}
        </div>
      )}
    </div>
  );
};
