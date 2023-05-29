import LinkButton from "components/UI/Buttons/LinkButton";
import CustomOverlayChildren from "./customChildren";
import styles from "./styles.module.scss";
import { MediaOverlayTypes, OverlayTypes } from "./types";

const MediaOverlayContent = ({
  heading,
  body,
  buttonsArray = [],
  extraContainerStyles = "",
  customOverlayProps,
  type = OverlayTypes.HOME_LAYOUT,
}: MediaOverlayTypes) => {
  const getLayout = (type: OverlayTypes) => {
    switch (type) {
      case OverlayTypes.HOME_LAYOUT:
        return (
          <div className={styles.mediaOverlayContentContainer}>
            <h1 className={styles.mediaOverlayContentHeading}>{heading}</h1>
            {body && <p className={styles.mediaOverlayContentBody}>{body}</p>}
            {buttonsArray.length > 0 && (
              <div className={styles.mediaOverlayContentButtonContainer}>
                {buttonsArray.map((button) => (
                  <div
                    key={button.key}
                    className={styles.mediaOverlayContentButton}
                  >
                    <LinkButton
                      {...button}
                      extraStyles={styles.linkExtraStyles}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case OverlayTypes.PRODUCT_LAYOUT:
        return (
          customOverlayProps && (
            <CustomOverlayChildren {...customOverlayProps} />
          )
        );
    }
  };
  return (
    <div
      className={`${styles.mediaOverlayContentWrapper} ${extraContainerStyles}`}
    >
      {getLayout(type)}
    </div>
  );
};

export default MediaOverlayContent;
