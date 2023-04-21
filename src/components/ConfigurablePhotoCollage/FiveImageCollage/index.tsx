import { css } from "@emotion/react";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import {
  FiveImageCollageFive,
  largeImageContainer,
  smallImageContainer,
} from "./styles";
import { FiveImageCollagePropType, Item } from "./types";

const FiveImageCollage = ({
  items,
  isReverseFlow = false,
}: FiveImageCollagePropType) => {
  const getRemainingImages = (items: Array<Item>) => {
    const processedComponents = [];
    for (let i = 0; i < items.length - 1; i++) {
      processedComponents.push(
        <div>
          <SingleMediaRendered
            key={items[i].key}
            url={items[i].url}
            mediaStyles={() => css`
              object-fit: cover;
            `}
            containerStyles={() => css`
              width: 100%;
              height: 70%;
            `}
            alt={items[i].alt}
            type={SingleMediaOptions.IMAGE}
            shouldShowOverlay={false}
            footerTextConfig={items[i].footerTextConfig}
          />
        </div>
      );
    }
    return processedComponents;
  };

  return (
    <div css={(theme) => FiveImageCollageFive(theme)}>
      <div css={(theme) => smallImageContainer(theme)}>
        {getRemainingImages(items)}
      </div>
      <div css={(theme) => largeImageContainer(theme, isReverseFlow)}>
        <SingleMediaRendered
          key={items[items.length - 1].key}
          url={items[items.length - 1].url}
          mediaStyles={() => css`
            object-fit: cover;
          `}
          containerStyles={() => css`
            width: 100%;
            height: 100%;
          `}
          alt={items[items.length - 1].alt}
          type={SingleMediaOptions.IMAGE}
          shouldShowOverlay={true}
          overlayTextConfig={items[items.length - 1].overlayTextConfig}
        />
      </div>
    </div>
  );
};

export default FiveImageCollage;
