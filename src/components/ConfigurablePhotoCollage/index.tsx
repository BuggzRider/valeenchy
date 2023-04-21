import FiveImageCollage from "./FiveImageCollage";
import ThreeImageCollage from "./ThreeImageCollage";
import {
  CONFIGURABLE_IMAGE_TYPE,
  ConfigurablePhotoCollagePropType,
} from "./types";

const ConfigurablePhotoCollage = ({
  items,
  type,
  isFiveCollageReversed,
}: ConfigurablePhotoCollagePropType) => {
  switch (type) {
    case CONFIGURABLE_IMAGE_TYPE.FIVE_IMAGE_COLLAGE:
      return (
        <FiveImageCollage items={items} isReverseFlow={isFiveCollageReversed} />
      );
    case CONFIGURABLE_IMAGE_TYPE.THREE_IMAGE_COLLAGE:
      return <ThreeImageCollage items={items} />;
    default:
      return <></>;
  }
};

export default ConfigurablePhotoCollage;
