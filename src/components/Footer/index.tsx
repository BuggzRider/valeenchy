import { css } from "@emotion/react";
import LinkListRenderer from "components/LinkListRenderer";
import LayoutContext from "context/layoutContext/layout-context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
  footer,
  footerInfoContainer,
  footerInfoWrapper,
  footerInnerWrapper,
  footerLinksContainer,
  footerLinksWrapper,
  footerLogoContainer,
  footerLogoLink,
} from "./styles";

const Footer = () => {
  const { footerConfig } = useContext(LayoutContext);
  return (
    <footer css={(theme) => footer(theme)}>
      <div css={(theme) => footerInnerWrapper(theme)}>
        <div css={(theme) => footerInfoWrapper(theme)}>
          <div css={(theme) => footerInfoContainer(theme)}>
            <div css={footerLogoContainer}>
              <Link css={(theme) => footerLogoLink(theme)} href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="Valeenchy logo"
                  width="150"
                  height="150"
                />
              </Link>
            </div>
            <p>
              This demo store was made with the products and photography of a
              brand we absolutely love, Paris & I.
            </p>
            <p>
              Paris & I is designed for movement. Uplifting ambitious bodies
              with mindfully created fashion. No matter the journey, Paris & I
              will encourage you through every step.
            </p>
          </div>
          <div css={(theme) => footerLinksWrapper(theme)}>
            <ul css={(theme) => footerLinksContainer(theme)}>
              {footerConfig.linkList.map((item) => (
                <LinkListRenderer
                  key={item.key}
                  config={item}
                  containerStyles={() => css`
                    width: 50%;
                    display: flex;
                    justify-content: flex-end;
                  `}
                  linkStyles={() => css`
                    font-weight: 400;
                  `}
                />
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
