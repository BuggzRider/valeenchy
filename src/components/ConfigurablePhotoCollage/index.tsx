import { Interpolation, Theme } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import ImageOverlay from "components/ImageOverlay";
import NextImageWithFallback from "components/NextImageWithFallback";
import { singleImageContainer, singleVideoContainer } from "./styles";
import { ConfigurablePhotoCollagePropType, ImageObject } from "./types";

const ConfigurablePhotoCollage = ({
  items,
}: ConfigurablePhotoCollagePropType) => {
  const getPhotoCollage = (list: Array<ImageObject>): EmotionJSX.Element => {
    if (list.length === 1) {
      return !list[0].isVideo ? (
        <div css={(theme: any) => singleImageContainer(theme)}>
          <NextImageWithFallback
            src={list[0].url}
            alt={list[0].url}
            fill
            objectFit="cover"
            css={(theme: Interpolation<Theme>) => list[0].styles(theme)}
            fallback="/assets/images/fallback_landscape.png"
          />
          {list[0].childComponent.component({
            ...list[0].childComponent.props,
          })}
          <ImageOverlay />
        </div>
      ) : (
        <div css={(theme: any) => singleVideoContainer(theme)}>
          <video autoPlay loop muted playsInline>
            <source src={list[0].url} type="video/mp4" />
          </video>
          {list[0].childComponent.component({
            ...list[0].childComponent.props,
          })}
          <ImageOverlay />
        </div>
      );
    }
    return <></>;
  };
  return getPhotoCollage(items);
};

export default ConfigurablePhotoCollage;
