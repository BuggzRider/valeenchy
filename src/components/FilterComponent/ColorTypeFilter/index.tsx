import { css } from "@emotion/react";
import { useState } from "react";
import {
  colorFilter,
  colorFilterContainer,
  filterListStyle,
  visiblityHidden,
} from "./styles";

const ColorTypeFilter = ({ options, showColorOptions, setColorValue }: any) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div css={() => colorFilterContainer()}>
      <ul css={() => filterListStyle()}>
        {showColorOptions &&
          options.map((option: any) => (
            <li
              css={css`
                height: auto;
                input[disabled] {
                  background-color: red;
                }
              `}
              key={`${option.code}`}
            >
              <input
                type="checkbox"
                name="filter.p.m.theme.cutline"
                value={selectedValue}
                id={option.code}
                css={() => visiblityHidden()}
                checked={option.selected}
              />

              <label
                htmlFor={option.code}
                css={() => colorFilter(option.code)}
                onMouseEnter={() => setColorValue(option.label)}
                onMouseLeave={() => setColorValue(selectedValue)}
                onClick={() => setSelectedValue(option.label)}
              >
                <span css={() => visiblityHidden()}>{option.label}</span>
                {option.selected && (
                  <span
                    css={css`
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      width: 24px;
                      height: 24px;
                      border-radius: 100%;
                      border: 3px solid white;
                      transform: translate(-50%, -50%);
                    `}
                  >
                    {""}
                  </span>
                )}
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ColorTypeFilter;
