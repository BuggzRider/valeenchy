import { css } from "@emotion/react";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import ArrowButton from "components/UI/Buttons/ArrowButton";
import { ARROW_BUTTON_TYPES } from "components/UI/Buttons/ArrowButton/types";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { CARD_SLIDER_TYPES, CardSliderPropTypes, SlideTypes } from "./types";

const CardSlider = ({
  slides,
  type,
  heading,
  containerStyles = "",
  elementStyles = "",
}: CardSliderPropTypes) => {
  const [scrollPostition, setScrollPosition] = useState(0);
  const containerRef = useRef<any>(null);
  const slideLeft = () => {
    containerRef.current.scrollLeft =
      containerRef.current?.scrollLeft - containerRef.current?.offsetWidth;
  };

  const slideRight = () => {
    containerRef.current.scrollLeft =
      containerRef.current?.scrollLeft + containerRef.current?.offsetWidth;
    console.log(containerRef.current);
  };

  const onScrollHandler = (e: any) => {
    setScrollPosition(e.target?.scrollLeft);
  };

  const arrowControlsContainer = () => (
    <div className={styles.cardSliderHeaderControlsContainer}>
      <ArrowButton
        onClickHandler={slideLeft}
        extraStyles={() => css``}
        label="previous"
        type={ARROW_BUTTON_TYPES.LEFT}
        disabled={scrollPostition === 0}
      />
      <ArrowButton
        onClickHandler={slideRight}
        extraStyles={() => css``}
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
      case CARD_SLIDER_TYPES.CIRCLE_IMAGE:
      case CARD_SLIDER_TYPES.SQUARE_IMAGE:
        return slides.map((slide) => (
          <div key={slide.key} className={styles.imageSlideshowImage}>
            <SingleMediaRendered
              key={slide.key}
              url={slide.src}
              mediaStyles={elementStyles}
              containerStyles={containerStyles}
              alt={slide.alt}
              type={SingleMediaOptions.IMAGE}
              shouldShowOverlay={false}
              footerTextConfig={slide.footerTextConfig}
            />
          </div>
        ));
      case CARD_SLIDER_TYPES.TEXT_CARD:
        return <div></div>;
      default:
        return <></>;
    }
  };

  return (
    <div className={styles.cardSliderContainer}>
      <div className={styles.cardSliderHeaderContainer}>
        <div className={styles.cardSliderHeadingContainer}>
          <p>{heading}</p>
        </div>
        {containerRef.current
          ? containerRef.current?.scrollWidth >
              containerRef.current?.clientWidth && arrowControlsContainer()
          : arrowControlsContainer()}
      </div>
      <div
        ref={containerRef}
        className={styles.imageSlideshowContainer}
        onScroll={onScrollHandler}
      >
        {getComponent(slides, type)}
      </div>
    </div>
  );
};
export default CardSlider;
