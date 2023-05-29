import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import styles from "./styles.module.scss";

const ProductImage = ({ imagesArray }: any) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className={styles.productImagesWrapper}>
      <div className={styles.zoomImageContainerStyles}>
        <InnerImageZoom
          src={imagesArray?.[selectedImageIndex].mediumImageUrl}
          zoomSrc={imagesArray?.[selectedImageIndex].largeImageURL}
          className={styles.zoomImageStyles}
        />
      </div>
      <div
        className={styles.productImagesContainer}
        onClick={(e) =>
          e.target?.dataset?.id && setSelectedImageIndex(e.target?.dataset.id)
        }
      >
        {imagesArray?.map((image, index: number) => (
          <div key={image.id} className={styles.productImageContainer}>
            <SingleMediaRendered
              url={image.smallImageUrl}
              mediaStyles={styles.productImages}
              containerStyles={styles.productImageContainer}
              alt={image.alt}
              type={SingleMediaOptions.IMAGE}
              data-id={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
