import ImageOverlay from "components/ImageOverlay";
import MediaFooterContent from "components/MediaContent/MediaFooterContent";
import MediaOverlayContent from "components/MediaContent/MediaOverlayContent";
import NextImageWithFallback from "components/NextImageWithFallback";
import { isEmpty, isNil } from "ramda";
import { Fragment } from "react";
import styles from "./styles.module.scss";
import { SingleMediaOptions, SingleMediaTypes } from "./types";

const SingleMediaRenderer = ({
  url,
  mediaStyles = "",
  containerStyles = "",
  alt,
  type,
  shouldShowOverlay,
  overlayTextConfig,
  footerTextConfig,
  fill = true,
}: SingleMediaTypes) => {
  return (
    <Fragment>
      <div className={`${styles.singleMediaContainer} ${containerStyles}`}>
        {type === SingleMediaOptions.IMAGE ? (
          <NextImageWithFallback
            src={url}
            alt={alt}
            fill={fill}
            priority
            className={mediaStyles}
            fallback="/assets/images/fallback_landscape.png"
          />
        ) : (
          <video autoPlay loop muted playsInline className={mediaStyles}>
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
