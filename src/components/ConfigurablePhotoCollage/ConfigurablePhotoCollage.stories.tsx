import { ThemeProvider } from "@emotion/react";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import ConfigurablePhotoCollage from ".";
import { photoCollageItems } from "./mock";

const stories = storiesOf("Configurable Photo collage", module);

stories.add("Single Image", () => (
  <ThemeProvider theme={defaultTheme}>
    <ConfigurablePhotoCollage items={photoCollageItems} />
  </ThemeProvider>
));
