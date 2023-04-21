import { css } from "@emotion/react";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import {
  footerImage,
  footerImagesContainer,
  landscapeImageContainer,
  threeImageCollage,
} from "./styles";
import { ThreeImageCollagePropType } from "./types";

const ThreeImageCollage = ({ items }: ThreeImageCollagePropType) => {
  return (
    <div css={(theme) => threeImageCollage(theme)}>
      <div css={(theme) => landscapeImageContainer(theme)}>
        <SingleMediaRendered
          key={items.landscape.key}
          url={items.landscape.url}
          mediaStyles={() => css`
            object-fit: cover;
          `}
          containerStyles={() => css`
            width: 100%;
            height: 100%;
          `}
          alt={items.landscape.alt}
          type={SingleMediaOptions.IMAGE}
          shouldShowOverlay={true}
          overlayTextConfig={items.landscape.overlayTextConfig}
        />
      </div>
      <div css={(theme) => footerImagesContainer(theme)}>
        <div css={(theme) => footerImage(theme)}>
          <SingleMediaRendered
            key={items.footerImg1.key}
            url={items.footerImg1.url}
            mediaStyles={() => css`
              object-fit: cover;
            `}
            containerStyles={() => css`
              width: 100%;
              height: 100%;
            `}
            alt={items.footerImg1.alt}
            type={SingleMediaOptions.IMAGE}
            shouldShowOverlay={true}
            overlayTextConfig={items.footerImg1.overlayTextConfig}
          />
        </div>
        <div css={(theme) => footerImage(theme)}>
          <SingleMediaRendered
            key={items.footerImg2.key}
            url={items.footerImg2.url}
            mediaStyles={() => css`
              object-fit: cover;
            `}
            containerStyles={() => css`
              width: 100%;
              height: 100%;
            `}
            alt={items.footerImg2.alt}
            type={SingleMediaOptions.IMAGE}
            shouldShowOverlay={true}
            overlayTextConfig={items.footerImg1.overlayTextConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeImageCollage;
