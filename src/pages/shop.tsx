import CardSlider from "components/CardSlider";
import { roundImagesMock, squareImagesMock } from "components/CardSlider/mock";
import { CARD_SLIDER_TYPES } from "components/CardSlider/types";
import FilterComponent from "components/FilterComponent";
import ChipContainer from "components/FilterComponent/ChipContainer";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import LayoutContext from "context/layoutContext/layout-context";
import { useRouter } from "next/router";
import { isEmpty } from "ramda";
import { useContext, useMemo } from "react";
import styles from "./../styles/pageStyles/shop.styles.module.scss";

const Products = () => {
  const { shopConfiguration } = useContext(LayoutContext);
  const router = useRouter();
  const { query, pathname } = router;

  const selectedFilters = useMemo(() => {
    if (isEmpty(query)) {
      return {};
    } else {
      return { default: "Clear Filters", ...query };
    }
  }, [query]);

  const onChipClickHandler = (e: any) => {
    const filter = e?.target?.dataset?.filter;
    if (filter) {
      if (Object.keys(JSON.parse(filter))[0] === "default") {
        router.push({
          pathname,
          query: {},
        });
      }
    }
  };

  return (
    <div className={styles.shopPageContainer}>
      <section className={styles.shopPageSectionContainer}>
        <div className={styles.shopPageCircleProductSliderContainer}>
          <CardSlider
            slides={roundImagesMock}
            type={CARD_SLIDER_TYPES.IMAGE}
            heading="All Products"
            containerStyles={styles.circleImage}
            elementStyles={styles.image}
          />
        </div>
      </section>
      <section className={styles.shopPageSectionContainer}>
        <ChipContainer
          selectedFiltersObject={selectedFilters}
          onChipClick={onChipClickHandler}
        />
      </section>
      <section className={styles.shopPageSectionContainer}>
        <div className={styles.shopPageListContainer}>
          <div className={styles.shopPageFilterContainer}>
            <FilterComponent
              filterConfig={shopConfiguration.filterConfig}
              selectedFilters={selectedFilters}
            />
          </div>
          <ul className={styles.shopPageItemsContainer}>
            {squareImagesMock.map((item) => (
              <li key={item.key} className={styles.shopPageItemContainer}>
                <SingleMediaRendered
                  url={item.src}
                  mediaStyles={styles.image}
                  containerStyles={styles.shopPageProductImageContainer}
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
