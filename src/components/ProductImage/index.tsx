import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import NextImageWithFallback from "../NextImageWithFallback";
import styles from "./styles.module.scss";
const ProductImage = ({ imagesArray }: any) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className={styles.productImageContainer}>
      <Zoom>
        <NextImageWithFallback src={imagesArray[selectedImageIndex]} />
      </Zoom>
      <div className={styles.productImageContainer}>
        {imagesArray.map((image, index: number) => {
          <div className={styles.productImageContainer}>
            <NextImageWithFallback
              src={image.imageSrc}
              alt={image.alt}
              fill
              className={styles.productImageContainer}
              data-id={index}
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default ProductImage;
