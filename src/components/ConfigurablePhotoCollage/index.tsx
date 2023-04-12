import { Interpolation, Theme } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import ImageOverlay from "components/ImageOverlay";
import NextImageWithFallback from "components/NextImageWithFallback";
import { singleImageContainer } from "./styles";
import { ConfigurablePhotoCollagePropType, ImageObject } from "./types";

const ConfigurablePhotoCollage = ({
  items,
}: ConfigurablePhotoCollagePropType) => {
  const getPhotoCollage = (list: Array<ImageObject>): EmotionJSX.Element => {
    if (list.length === 1) {
      return (
        <div css={(theme: any) => singleImageContainer(theme)}>
          <NextImageWithFallback
            src={list[0].url}
            alt={list[0].url}
            fill
            objectFit="cover"
            css={(theme: Interpolation<Theme>) => list[0].styles(theme)}
            fallback="/assets/images/fallback_landscape.png"
          />
          <ImageOverlay>
            {list[0].childComponent.component({
              ...list[0].childComponent.props,
            })}
          </ImageOverlay>
        </div>
      );
    }
    return <></>;
  };
  return getPhotoCollage(items);
};

export default ConfigurablePhotoCollage;
