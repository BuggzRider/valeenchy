import { ThemeProvider } from "@emotion/react";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import ConfigurablePhotoCollage from ".";
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
