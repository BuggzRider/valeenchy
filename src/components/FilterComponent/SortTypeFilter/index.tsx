import { css } from "@emotion/react";
import { useState } from "react";
import { sortOption, sortOptionsContainer } from "../styles";
import { sortFilterContainer } from "./styles";

const arrowUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-up"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
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

const SortTypeFilter = ({ options }: any) => {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState("Sort");
  return (
    <div>
      <div
        css={(theme) => sortFilterContainer(theme)}
        onClick={() => setShowOptions((prevState) => !prevState)}
      >
        <span>{value}</span>
        <span
          css={css`
            position: relative;
            left: 80%;
          `}
        >
          {showOptions ? arrowUp : arrowDown}
        </span>
      </div>
      {showOptions && (
        <div css={(theme) => sortOptionsContainer(theme)}>
          {options.map((option: any) => (
            <div
              css={(theme) => sortOption(theme)}
              key={`${option.key}_${option.order}`}
              onClick={() => {
                setValue(option.label);
                setShowOptions(false);
              }}
            >
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortTypeFilter;
