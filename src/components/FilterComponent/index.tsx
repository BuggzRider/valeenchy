import { css } from "@emotion/react";
import { useState } from "react";
import ChipContainer from "./ChipContainer";
import ColorTypeFilter from "./ColorTypeFilter";
import FilterWithCount from "./FilterWithCounts";
import { selectedFilters } from "./mock";
import PriceTypeFilter from "./PriceTypeFilter";
import SortTypeFilter from "./SortTypeFilter";
import { filterContainer, normalFilterContainer } from "./styles";

const arrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-down"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const FilterComponent = ({ allFilters }: any) => {
  const {
    sortFilterOptions,
    colorFilterOptions,
    productTypeFilterOptions,
    availableFilterOptions,
  } = allFilters;
  const [colorValue, setColorValue] = useState("");
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [showProductTypeOptions, setShowProductTypeOptions] = useState(false);
  const [showAvailableFilterOptions, setShowAvailableFilterOptions] =
    useState(false);
  const [showPriceFilterOptions, setShowPriceFilterOptions] = useState(false);
  return (
    <>
      <ChipContainer selectedFilters={selectedFilters} />
      <SortTypeFilter options={sortFilterOptions} />
      <div css={(theme) => filterContainer(theme)}>
        <div css={(theme) => normalFilterContainer(theme)}>Filters</div>
        <div
          css={(theme) => normalFilterContainer(theme)}
          onClick={() => setShowColorOptions((prevState) => !prevState)}
        >
          Color Filter <span>{colorValue}</span>
          <span
            css={css`
              position: relative;
              left: 70%;
            `}
          >
            {showColorOptions ? arrowDown : arrowRight}
          </span>
        </div>
        {showColorOptions && (
          <ColorTypeFilter
            options={colorFilterOptions}
            showColorOptions={showColorOptions}
            setColorValue={setColorValue}
            selectedFilters={selectedFilters}
          />
        )}
        <div
          css={(theme) => normalFilterContainer(theme)}
          onClick={() => setShowProductTypeOptions((prevState) => !prevState)}
        >
          Product Type
          <span
            css={css`
              position: relative;
              left: 70%;
            `}
          >
            {showProductTypeOptions ? arrowDown : arrowRight}
          </span>
        </div>
        {showProductTypeOptions && (
          <FilterWithCount
            options={productTypeFilterOptions}
            selectedFilters={selectedFilters}
          />
        )}
        <div
          css={(theme) => normalFilterContainer(theme)}
          onClick={() =>
            setShowAvailableFilterOptions((prevState) => !prevState)
          }
        >
          Availability
          <span
            css={css`
              position: relative;
              left: 70%;
            `}
          >
            {showAvailableFilterOptions ? arrowDown : arrowRight}
          </span>
        </div>
        {showAvailableFilterOptions && (
          <FilterWithCount
            options={availableFilterOptions}
            selectedFilters={selectedFilters}
          />
        )}
        <div
          css={(theme) => normalFilterContainer(theme)}
          onClick={() => setShowPriceFilterOptions((prevState) => !prevState)}
        >
          Price
          <span
            css={css`
              position: relative;
              left: 70%;
            `}
          >
            {showPriceFilterOptions ? arrowDown : arrowRight}
          </span>
        </div>
        {showPriceFilterOptions && (
          <PriceTypeFilter selectedFilters={selectedFilters} />
        )}
      </div>
    </>
  );
};

export default FilterComponent;
