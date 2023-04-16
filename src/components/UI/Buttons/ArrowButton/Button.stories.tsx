/* eslint-disable @emotion/jsx-import */
import { ThemeProvider, css } from "@emotion/react";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import ArrowButton from ".";
import { ARROW_BUTTON_TYPES } from "./types";

const stories = storiesOf("Arrow Button", module);

const storyStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

stories.add("Left Arrow", () => (
  <ThemeProvider theme={defaultTheme}>
    <div css={storyStyles}>
      <ArrowButton
        onClickHandler={() => {}}
        extraStyles={() => css``}
        label={text("Button text", "Left")}
        type={ARROW_BUTTON_TYPES.LEFT}
        disabled={boolean("is disabled", false)}
      />
    </div>
  </ThemeProvider>
));

stories.add("Right Arrow", () => (
  <ThemeProvider theme={defaultTheme}>
    <div css={storyStyles}>
      <ArrowButton
        onClickHandler={() => {}}
        extraStyles={() => css``}
        label={text("Button text", "Right")}
        type={ARROW_BUTTON_TYPES.RIGHT}
        disabled={boolean("is disabled", false)}
      />
    </div>
  </ThemeProvider>
));
