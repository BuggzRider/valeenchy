import { css } from "@emotion/react";

const PriceTypeFilter = (props: any) => {
  return (
    <div
      css={() => css`
        display: flex;
        justify-content: center;
        padding: 16px 8px;
      `}
    >
      <div
        css={css`
          border: 1px solid grey;
          width: 30%;
          height: 32px;
          display: flex;
          justify-content: space-between;
        `}
      >
        <span>{"$"}</span>
        <input
          type="number"
          id="lower-range"
          css={() => css`
            width: 50%;
            height: 100%;
            border: none;
          `}
        />
      </div>
      {"-"}
      <div
        css={css`
          border: 1px solid grey;
          width: 30%;
          height: 32px;
          display: flex;
          justify-content: space-between;
        `}
      >
        {"$"}
        <input
          type="number"
          id="upper-range"
          css={() => css`
            width: 50%;
            height: 100%;
            border: none;
          `}
        />
      </div>
    </div>
  );
};

export default PriceTypeFilter;
