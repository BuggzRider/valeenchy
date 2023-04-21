import { Interpolation, Theme, css } from "@emotion/react";
import ImageOverlay from "components/ImageOverlay";
import MediaFooterContent from "components/MediaContent/MediaFooterContent";
import MediaOverlayContent from "components/MediaContent/MediaOverlayContent";
import NextImageWithFallback from "components/NextImageWithFallback";
import { isEmpty, isNil } from "ramda";
import { Fragment } from "react";
import { singleMediaContainer } from "./styles";
import { SingleMediaOptions, SingleMediaTypes } from "./types";

const SingleMediaRenderer = ({
  url,
  mediaStyles = () => css``,
  containerStyles = () => css``,
  alt,
  type,
  shouldShowOverlay,
  overlayTextConfig,
  footerTextConfig,
}: SingleMediaTypes) => {
  return (
    <Fragment>
      <div
        css={[
          (theme: any) => singleMediaContainer(theme),
          containerStyles ? (theme) => containerStyles(theme) : css``,
        ]}
      >
        {type === SingleMediaOptions.IMAGE ? (
          <NextImageWithFallback
            src={url}
            alt={alt}
            fill
            priority
            css={(theme: Interpolation<Theme>) => mediaStyles(theme)}
            fallback="/assets/images/fallback_landscape.png"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            css={mediaStyles ? (theme: any) => mediaStyles(theme) : css``}
          >
            <source src={url} type="video/mp4" />
          </video>
        )}
        {!isNil(overlayTextConfig) && !isEmpty(overlayTextConfig) && (
          <MediaOverlayContent {...overlayTextConfig} />
        )}
        {shouldShowOverlay && <ImageOverlay />}
      </div>
      {!isNil(footerTextConfig) && !isEmpty(footerTextConfig) && (
        <MediaFooterContent {...footerTextConfig} />
      )}
    </Fragment>
  );
};

export default SingleMediaRenderer;
