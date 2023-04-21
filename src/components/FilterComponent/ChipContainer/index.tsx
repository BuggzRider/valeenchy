import { css } from "@emotion/react";

const ChipContainer = ({ selectedFilters, setSelectedFilters }: any) => {
  return (
    <div
      css={css`
        padding: 16px 0px;
      `}
    >
      <div
        css={css`
          border: 1px solid #eeeff1;
          display: inline-block;
          padding: 8px;
          font-size: 16px;
          border-radius: 3px;
          cursor: pointer;
          margin: 0px 8px;
        `}
        onClick={() => setSelectedFilters([])}
      >
        <span
          css={css`
            font-size: 10px;
            margin: 0px 5px;
          `}
        >
          ✖
        </span>
        Clear Filters
      </div>
      {selectedFilters.map((filter: any) => (
        <div
          css={css`
            border: 1px solid #eeeff1;
            display: inline-block;
            padding: 8px;
            font-size: 16px;
            border-radius: 3px;
            cursor: pointer;
            margin: 5px 8px;
          `}
          onClick={() =>
            setSelectedFilters((prevState: any) =>
              prevState.filter(
                (filterOption: any) => filterOption.value !== filter.value
              )
            )
          }
          key={`${filter.type}_${filter.value}`}
        >
          <span
            css={css`
              font-size: 10px;
              margin: 0px 5px;
            `}
          >
            ✖
          </span>{" "}
          {filter.value}
        </div>
      ))}
    </div>
  );
};

export default ChipContainer;
