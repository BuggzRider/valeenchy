import { css } from "@emotion/react";

export const threeImageCollageMock = {
  landscape: {
    key: "key1",
    url: "/assets/images/test.webp",
    alt: "image",
    overlayTextConfig: {
      heading: "OUR TEAM",
      extraContainerStyles: (theme) => css`
        align-items: flex-end;
      `,
    },
  },
  footerImg1: {
    key: "key1",
    url: "/assets/images/test.webp",
    alt: "image",
    overlayTextConfig: {
      heading: "OUR TEAM",
      extraContainerStyles: (theme) => css`
        align-items: flex-end;
        font-style: italic;
      `,
    },
  },
  footerImg2: {
    key: "key1",
    url: "/assets/images/test.webp",
    alt: "image",
    overlayTextConfig: {
      heading: "OUR TEAM",
      extraContainerStyles: (theme) => css`
        align-items: flex-end;
        font-style: italic;
      `,
    },
  },
};
