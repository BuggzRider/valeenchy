import CardSlider from "components/CardSlider";
import { roundImagesMock, squareImagesMock } from "components/CardSlider/mock";
import { CARD_SLIDER_TYPES } from "components/CardSlider/types";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import {
  shopPageContainer,
  shopPageItemContainer,
  shopPageItemContainerStyles,
  shopPageItemMediaStyles,
  shopPageItemsContainer,
  shopPageListContainer,
  shopPageSectionContainer,
} from "./pageStyles/shop.styles";

const Products = () => {
  return (
    <div css={(theme) => shopPageContainer(theme)}>
      <section css={(theme) => shopPageSectionContainer(theme)}>
        <CardSlider
          slides={roundImagesMock}
          type={CARD_SLIDER_TYPES.CIRCLE_IMAGE}
          heading="All Products"
        />
      </section>
      <section css={(theme) => shopPageSectionContainer(theme)}>
        {/* <div>
          <ChipContainer selectedFilters={selectedFilters} />
        </div> */}
        <div css={(theme) => shopPageListContainer(theme)}>
          {/* <div css={(theme) => shopPageFilterContainer(theme)}>
            <FilterComponent allFilters={allFilters} />
          </div> */}
          <ul css={(theme) => shopPageItemsContainer(theme)}>
            {squareImagesMock.map((item) => (
              <li key={item.key} css={(theme) => shopPageItemContainer(theme)}>
                <SingleMediaRendered
                  url={item.src}
                  mediaStyles={(theme) => shopPageItemMediaStyles(theme)}
                  containerStyles={(theme) =>
                    shopPageItemContainerStyles(theme)
                  }
                  alt={item.alt}
                  type={SingleMediaOptions.IMAGE}
                  shouldShowOverlay={false}
                  footerTextConfig={item.footerTextConfig}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Products;
