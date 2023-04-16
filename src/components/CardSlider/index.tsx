import { css } from "@emotion/react";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import ArrowButton from "components/UI/Buttons/ArrowButton";
import { ARROW_BUTTON_TYPES } from "components/UI/Buttons/ArrowButton/types";
import { useRef } from "react";
import { imageSlideshowContainer, imageSlideshowImage } from "./styles";
import { CardSliderPropTypes } from "./types";

const CardSlider = ({ slides, type }: CardSliderPropTypes) => {
  const containerRef = useRef<any>(null);
  const slideLeft = () => {
    containerRef.current.scrollLeft = containerRef.current?.scrollLeft + 500;
  };

  const slideRight = () => {
    containerRef.current.scrollLeft = containerRef.current.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <div>
        <ArrowButton
          onClickHandler={slideLeft}
          extraStyles={() => css``}
          label="previous"
          type={ARROW_BUTTON_TYPES.LEFT}
          disabled={false}
        />
        <ArrowButton
          onClickHandler={slideRight}
          extraStyles={() => css``}
          label="forward"
          type={ARROW_BUTTON_TYPES.RIGHT}
          disabled={false}
        />
      </div>
      <div ref={containerRef} css={(theme) => imageSlideshowContainer(theme)}>
        {slides.map((slide) => {
          return (
            <div key={slide.key} css={(theme) => imageSlideshowImage(theme)}>
              <SingleMediaRendered
                key={slide.key}
                url={slide.src}
                mediaStyles={() => css`
                  object-fit: cover;
                `}
                containerStyles={() => css`
                  width: 200px;
                  height: 200px;
                  clip-path: circle(50%);
                  position: relative;
                  display: block;
                  overflow: hidden;
                `}
                alt={slide.alt}
                type={SingleMediaOptions.IMAGE}
                shouldShowOverlay={false}
                footerTextConfig={slide.footerTextConfig}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardSlider;
