import { css } from "@emotion/react";
import { SingleImageContent } from "./utils";

export const photoCollageMock = {
  oneImage: {
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
  oneVideo: {
    url: "/assets/videos/testVideo.mp4",
    isVideo: true,
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
