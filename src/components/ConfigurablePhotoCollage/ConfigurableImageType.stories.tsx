import { ThemeProvider } from "@emotion/react";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import ConfigurablePhotoCollage from ".";
import { threeImageCollageMock } from "./ThreeImageCollage/mock";
import { fiveImageCollageMock } from "./mock";
import { CONFIGURABLE_IMAGE_TYPE } from "./types";

const stories = storiesOf("Configurable Photo collage", module);

stories.add("Five image Collage", () => (
  <ThemeProvider theme={defaultTheme}>
    <ConfigurablePhotoCollage
      items={fiveImageCollageMock}
      type={CONFIGURABLE_IMAGE_TYPE.FIVE_IMAGE_COLLAGE}
    />
  </ThemeProvider>
));

stories.add("Three Image  Collage", () => (
  <ThemeProvider theme={defaultTheme}>
    <ConfigurablePhotoCollage
      items={threeImageCollageMock}
      type={CONFIGURABLE_IMAGE_TYPE.THREE_IMAGE_COLLAGE}
    />
  </ThemeProvider>
));
