import FiveImageCollage from "./FiveImageCollage";
import {
  CONFIGURABLE_IMAGE_TYPE,
  ConfigurablePhotoCollagePropType,
} from "./types";

const ConfigurablePhotoCollage = ({
  items,
  type,
}: ConfigurablePhotoCollagePropType) => {
  switch (type) {
    case CONFIGURABLE_IMAGE_TYPE.FIVE_IMAGE_COLLAGE:
      return <FiveImageCollage items={items} />;
    default:
      return <></>;
  }
};

export default ConfigurablePhotoCollage;
