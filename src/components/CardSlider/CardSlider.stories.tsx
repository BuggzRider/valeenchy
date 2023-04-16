import { ThemeProvider } from "@emotion/react";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import CardSlider from ".";
import { roundImagesMock, squareImagesMock } from "./mock";
import { CARD_SLIDER_TYPES } from "./types";

const stories = storiesOf("Card Slider", module);

stories.add("Round list", () => (
  <ThemeProvider theme={defaultTheme}>
    <CardSlider
      slides={roundImagesMock}
      type={CARD_SLIDER_TYPES.CIRCLE_IMAGE}
      heading="Shop by colour"
    />
  </ThemeProvider>
));

stories.add("Square list", () => (
  <ThemeProvider theme={defaultTheme}>
    <CardSlider
      slides={squareImagesMock}
      type={CARD_SLIDER_TYPES.SQUARE_IMAGE}
      heading="Our Best Sellers"
    />
  </ThemeProvider>
));
