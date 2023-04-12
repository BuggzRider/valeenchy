/* eslint-disable @emotion/jsx-import */
import { ThemeProvider, css } from "@emotion/react";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import Button from ".";

const stories = storiesOf("Button", module);

const storyStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

stories.add("Default", () => (
  <ThemeProvider theme={defaultTheme}>
    <div css={storyStyles}>
      <Button
        isLink={boolean("Is a link", false)}
        url={text("Link URL", "https://www.google.com/")}
        onClickHandler={() => {}}
        extraStyles={() => css``}
        label={text("Button text", "Button")}
      />
    </div>
  </ThemeProvider>
));
