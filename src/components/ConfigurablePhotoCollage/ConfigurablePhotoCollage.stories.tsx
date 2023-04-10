import { storiesOf } from "@storybook/react";
import ConfigurablePhotoCollage from ".";
import { photoCollageItems } from "./mock";

const stories = storiesOf("Configurable Photo collage", module);

stories.add("Single Image", () => (
  <ConfigurablePhotoCollage items={photoCollageItems} />
));
