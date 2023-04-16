import { css } from "@emotion/react";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import ArrowButton from "components/UI/Buttons/ArrowButton";
import { ARROW_BUTTON_TYPES } from "components/UI/Buttons/ArrowButton/types";
import { useRef, useState } from "react";
import {
  cardSliderContainer,
  cardSliderHeaderContainer,
  cardSliderHeaderControlsContainer,
  cardSliderHeadingContainer,
  imageSlideshowContainer,
  imageSlideshowImage,
} from "./styles";
import { CARD_SLIDER_TYPES, CardSliderPropTypes, SlideTypes } from "./types";

const CardSlider = ({ slides, type, heading }: CardSliderPropTypes) => {
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
    <div css={(theme) => cardSliderHeaderControlsContainer(theme)}>
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

  const getCompoenent = (
    slides: Array<SlideTypes>,
    type: CARD_SLIDER_TYPES
  ) => {
    switch (type) {
      case CARD_SLIDER_TYPES.CIRCLE_IMAGE:
      case CARD_SLIDER_TYPES.SQUARE_IMAGE:
        return slides.map((slide) => (
          <div
            key={slide.key}
            css={(theme) => imageSlideshowImage(theme, type)}
          >
            <SingleMediaRendered
              key={slide.key}
              url={slide.src}
              mediaStyles={() => css`
                object-fit: cover;
              `}
              containerStyles={() =>
                type === CARD_SLIDER_TYPES.CIRCLE_IMAGE
                  ? css`
                      width: 100%;
                      height: 100%;
                      max-height: 200px;
                      clip-path: circle(50%);
                      border-radius: 50% !important;
                      overflow: hidden;
                    `
                  : css`
                      width: 100%;
                      height: 70%;
                    `
              }
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
    <div css={(theme) => cardSliderContainer(theme)}>
      <div css={(theme) => cardSliderHeaderContainer(theme)}>
        <div css={(theme) => cardSliderHeadingContainer(theme)}>
          <p>{heading}</p>
        </div>
        {containerRef.current
          ? containerRef.current?.scrollWidth >
              containerRef.current?.clientWidth && arrowControlsContainer()
          : arrowControlsContainer()}
      </div>
      <div
        ref={containerRef}
        css={(theme) => imageSlideshowContainer(theme)}
        onScroll={onScrollHandler}
      >
        {getCompoenent(slides, type)}
      </div>
    </div>
  );
};
export default CardSlider;
