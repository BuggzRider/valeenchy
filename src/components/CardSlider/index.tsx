import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import ArrowButton from "components/UI/Buttons/ArrowButton";
import { ARROW_BUTTON_TYPES } from "components/UI/Buttons/ArrowButton/types";
import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { CARD_SLIDER_TYPES, CardSliderPropTypes, SlideTypes } from "./types";

const CardSlider = ({
  slides,
  type,
  heading,
  containerStyles = "",
  elementStyles = "",
  cardSliderHeaderExtraStyles = "",
  selectedOption = "",
  selectedItemStyles = "",
  onClick,
  showHoveredText,
}: CardSliderPropTypes) => {
  const [scrollPostition, setScrollPosition] = useState(0);
  const [hoveredItem, setHoveredItem] = useState("");
  const containerRef = useRef<any>(null);

  const slideLeft = () => {
    const currentScrollPosition =
      containerRef.current?.scrollLeft - containerRef.current?.offsetWidth;
    containerRef.current.scrollLeft = currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  const slideRight = () => {
    const currentScrollPosition =
      containerRef.current?.scrollLeft + containerRef.current?.offsetWidth;
    containerRef.current.scrollLeft = currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  const arrowControlsContainer = () => (
    <div className={styles.cardSliderHeaderControlsContainer}>
      <ArrowButton
        onClickHandler={slideLeft}
        label="previous"
        type={ARROW_BUTTON_TYPES.LEFT}
        disabled={scrollPostition <= 0}
      />
      <ArrowButton
        onClickHandler={slideRight}
        label="forward"
        type={ARROW_BUTTON_TYPES.RIGHT}
        disabled={
          containerRef.current
            ? scrollPostition >=
              containerRef.current?.scrollWidth -
                containerRef.current?.offsetWidth
            : false
        }
      />
    </div>
  );

  const getComponent = (slides: Array<SlideTypes>, type: CARD_SLIDER_TYPES) => {
    switch (type) {
      case CARD_SLIDER_TYPES.IMAGE:
        return slides?.map((slide) => {
          const imageComponent = (
            <SingleMediaRendered
              key={slide.key}
              data-id={slide.key}
              url={slide.src}
              mediaStyles={elementStyles}
              containerStyles={`${containerStyles} ${
                selectedOption === slide.key ? selectedItemStyles : ""
              }`}
              alt={slide.alt}
              type={SingleMediaOptions.IMAGE}
              shouldShowOverlay={false}
              footerTextConfig={slide.footerTextConfig}
            />
          );
          return onClick ? (
            imageComponent
          ) : (
            <Link
              href={slide.url || ""}
              key={slide.key}
              className={containerStyles}
            >
              {imageComponent}
            </Link>
          );
        });
      case CARD_SLIDER_TYPES.TEXT_CARD:
        return slides?.map((slide) => (
          <div
            key={slide.key}
            className={`${containerStyles} ${
              selectedOption === slide.key ? selectedItemStyles : ""
            }`}
            data-id={slide.key}
          >
            <p className={elementStyles}>{slide.label}</p>
          </div>
        ));
      default:
        return <></>;
    }
  };

  return (
    <div className={styles.cardSliderContainer}>
      <div className={styles.cardSliderHeaderContainer}>
        <div
          className={`${styles.cardSliderHeadingContainer} ${cardSliderHeaderExtraStyles}`}
        >
          <p className={styles.cardSliderHeadingtext}>{heading}</p>
          {showHoveredText && (
            <p className={styles.cardSliderItemHoveredName}>
              {hoveredItem || selectedOption}
            </p>
          )}
        </div>
        {containerRef.current
          ? containerRef.current?.scrollWidth >
              containerRef.current?.clientWidth && arrowControlsContainer()
          : arrowControlsContainer()}
      </div>
      <div
        ref={containerRef}
        className={styles.imageSlideshowContainer}
        onClick={onClick}
        onMouseOver={(e) =>
          e?.target?.dataset?.id
            ? setHoveredItem(e?.target?.dataset?.id)
            : setHoveredItem("")
        }
      >
        {getComponent(slides, type)}
      </div>
    </div>
  );
};
export default CardSlider;
