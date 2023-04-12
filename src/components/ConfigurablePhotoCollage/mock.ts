import { css } from "@emotion/react";
import { SingleImageContent } from "./utils";

export const photoCollageMock = {
  oneImage: {
    width: "100%",
    height: "100%",
    url: "/assets/images/test.webp",
    styles: () => css``,
    alt: "",
    childComponent: {
      component: SingleImageContent,
      props: {
        heading: "Story Theme",
        body: "A powerful theme built for modern commerce.",
        buttonsArray: [
          { isLink: false, label: "View Products" },
          { isLink: true, url: "/", label: "Learn More" },
        ],
      },
    },
  },
};

export const photoCollageItems = [photoCollageMock.oneImage];
