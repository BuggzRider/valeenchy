import NextImageWithFallback from "components/NextImageWithFallback";
import Button from "components/UI/Buttons/Button";
import Link from "next/link";
import {
  customButtonStyles,
  customOverlayButtonContainer,
  customOverlayChildrenContainer,
  customOverlayLinksContainer,
  linkImageStyles,
  linkItemsContainer,
  linkStyles,
  linkTextStyles,
} from "./styles";
import { CustomOverlayChildrenPropTypes } from "./types";

const CustomOverlayChildren = ({
  whatsappUrl,
  phoneNumber,
  onEmiClickHandler,
  onClickDownloadBrochure,
}: CustomOverlayChildrenPropTypes) => {
  return (
    <div css={(theme) => customOverlayChildrenContainer(theme)}>
      <div css={(theme) => customOverlayLinksContainer(theme)}>
        <Link href={whatsappUrl} css={(theme) => linkStyles(theme)}>
          <NextImageWithFallback
            src="/icons/whatsapp.png"
            width={25}
            height={26}
            css={(theme: any) => linkImageStyles(theme)}
          />
        </Link>
        <div css={(theme) => linkItemsContainer(theme)}>
          <Link href={`tel:${phoneNumber}`} css={(theme) => linkStyles(theme)}>
            <NextImageWithFallback
              src="/icons/phone.png"
              width={25}
              height={26}
              css={(theme: any) => linkImageStyles(theme)}
            />
          </Link>
          <p css={(theme) => linkTextStyles(theme)}>GET QUICK CALL</p>
        </div>
      </div>
      <div css={(theme) => customOverlayButtonContainer(theme)}>
        <Button onClickHandler={onEmiClickHandler} label={"EMI Calculator"} />
        <Button
          onClickHandler={onClickDownloadBrochure}
          label={"Download Brochure"}
          extraStyles={(theme) => customButtonStyles(theme)}
        />
      </div>
    </div>
  );
};

export default CustomOverlayChildren;
