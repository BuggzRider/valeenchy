import CardSlider from "components/CardSlider";
import { CARD_SLIDER_TYPES } from "components/CardSlider/types";
import ItemStockLabel from "components/ItemStockLabel";
import ProductPageButton from "components/UI/Buttons/ProductPageButton";
import NumberCounter from "components/UI/NumberCounter/NumberCounter";
import styles from "./styles.module.scss";
const ProductInfo = ({ productInfoData }: any) => {
  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.productInfoHeadingContainer}>
        <h1 className={styles.productInfoHeading}>
          {productInfoData?.label || ""}
        </h1>
        <p className={styles.productPrice}>{`₹ ${
          productInfoData?.price || ""
        }`}</p>
      </div>
      <div>
        <div className={styles.productInfoCircleColorSliderContainer}>
          <CardSlider
            slides={productInfoData?.colors}
            type={CARD_SLIDER_TYPES.IMAGE}
            heading="Color"
            containerStyles={styles.circleImage}
            selectedItemStyles={styles.isMediaSelected}
            cardSliderHeaderExtraStyles={styles.cardSliderHeaderExtraStyles}
            elementStyles={styles.image}
            selectedOption={"Navy"}
            onClick={() => {}}
            showHoveredText
          />
        </div>
        <div className={styles.productInfoSquareSizesSliderContainer}>
          <CardSlider
            slides={productInfoData?.sizes}
            type={CARD_SLIDER_TYPES.TEXT_CARD}
            heading="Size"
            containerStyles={styles.squareTextContainer}
            selectedItemStyles={styles.isSquareTextSelected}
            cardSliderHeaderExtraStyles={styles.cardSliderHeaderExtraStyles}
            elementStyles={styles.textStyles}
            selectedOption={"XS"}
            onClick={() => {}}
          />
        </div>
        <div>
          <NumberCounter min={1} max={5} onChange={() => {}} value={1} />
        </div>
        <div>
          <ItemStockLabel noOfItems={0} />
        </div>
        <div className={styles.productPurchageButtonsContainer}>
          <ProductPageButton onClick={() => {}}>Add to Cart</ProductPageButton>
          <ProductPageButton onClick={() => {}} isPrimary>
            Buy it now
          </ProductPageButton>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
