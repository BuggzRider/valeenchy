import { css } from "@emotion/react";
import CardSlider from "components/CardSlider";
import { roundImagesMock } from "components/CardSlider/mock";
import { CARD_SLIDER_TYPES } from "components/CardSlider/types";
import { fiveImageCollageMock as items } from "components/ConfigurablePhotoCollage/mock";
import FilterComponent from "components/FilterComponent";
import { allFilters } from "components/FilterComponent/mock";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";

const Products = () => {
  return (
    <div>
      <div>
        <CardSlider
          slides={roundImagesMock}
          type={CARD_SLIDER_TYPES.CIRCLE_IMAGE}
          heading="All Products"
        />
        <FilterComponent allFilters={allFilters} />
        <div
          css={css`
            display: inline-block;
            width: 70%;
            float: right;
          `}
        >
          <SingleMediaRendered
            key={items[0].key}
            url={items[0].url}
            mediaStyles={() => css`
              object-fit: cover;
            `}
            containerStyles={() => css`
              width: 25%;
              height: 25%;
            `}
            alt={items[0].alt}
            type={SingleMediaOptions.IMAGE}
            shouldShowOverlay={false}
            footerTextConfig={items[0].footerTextConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
