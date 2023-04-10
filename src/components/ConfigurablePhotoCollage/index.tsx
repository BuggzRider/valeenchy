import { Interpolation, Theme } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import ImageWithFallback from "components/NextImageWithFallback";
import { ConfigurablePhotoCollagePropType, ImageObject } from "./types";

const ConfigurablePhotoCollage = ({
  items,
}: ConfigurablePhotoCollagePropType) => {
  const getPhotoCollage = (list: Array<ImageObject>): EmotionJSX.Element => {
    if (list.length === 1) {
      return (
        <div>
          <ImageWithFallback
            src={list[0].url}
            alt={list[0].url}
            fill
            css={(theme: Interpolation<Theme>) => list[0].styles(theme)}
          />
        </div>
      );
    }
    return <></>;
  };
  return getPhotoCollage(items);
};

export default ConfigurablePhotoCollage;
