import { storiesOf } from "@storybook/react";
import ConfigurablePhotoCollage from "../components/ConfigurablePhotoCollage";
import { photoCollageItems } from "../components/ConfigurablePhotoCollage/mock";

const stories = storiesOf("Configurable Photo collage", module);

stories.add("Single Image", () => (
  <ConfigurablePhotoCollage items={photoCollageItems} />
));
