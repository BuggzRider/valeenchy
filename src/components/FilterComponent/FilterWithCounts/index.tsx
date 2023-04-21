import { css } from "@emotion/react";

const FilterWithCount = ({ options }: any) => {
  return (
    <ul
      css={css`
        list-style: none;
        border-bottom: 1px solid #eeeff1;
        padding: 16px 8px;
      `}
    >
      {options.map((option: any) => (
        <li
          css={() => css`
            color: #000;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            input {
              color: red;
            }
          `}
          key={option.key}
        >
          <div>
            <input
              type="checkbox"
              id={option.key}
              checked={option.selected}
              disabled={option.count === 0}
            />
            <label htmlFor={option.key}> {option.label} </label>
          </div>
          <span>{option.count}</span>
        </li>
      ))}
    </ul>
  );
};

export default FilterWithCount;
