import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import styles from "./styles.module.scss";
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
            mediaStyles={styles.image}
            containerStyles={styles.smallImageConatiner}
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
    <div className={styles.fiveImageCollageFive}>
      <div className={styles.smallImageWrapper}>
        {getRemainingImages(items)}
      </div>
      <div
        className={`${styles.largeImageWrapper} ${
          isReverseFlow ? styles.firstLargeImage : ""
        }`}
      >
        <SingleMediaRendered
          key={items[items.length - 1].key}
          url={items[items.length - 1].url}
          mediaStyles={styles.image}
          containerStyles={styles.largeImageConatiner}
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
