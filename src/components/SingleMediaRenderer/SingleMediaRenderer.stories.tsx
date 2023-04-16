import { ThemeProvider, css } from "@emotion/react";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import SingleMediaRendered from ".";
import { SingleMediaOptions } from "./types";

const stories = storiesOf("Sindle Media renderer", module);

stories.add("Single Image", () => (
  <ThemeProvider theme={defaultTheme}>
    <SingleMediaRendered
      url="/assets/images/test.webp"
      mediaStyles={(theme: any) => css`
        object-fit: cover;
        ${theme.breakpoints({
          transform: [`scale(1.1)`, `scale(1)`, `scale(1)`],
        })}
      `}
      containerStyles={(theme: any) => css`
        width: 100%;
        ${theme.breakpoints({
          height: ["70vh", "70vh", "68vh"],
        })}
      `}
      alt="image"
      type={SingleMediaOptions.IMAGE}
      shouldShowOverlay={true}
      overlayTextConfig={{
        contentAlignment: "flex-end",
        heading: "Story Theme",
        body: "A powerful theme built for modern commerce.",
        buttonsArray: [
          { isLink: false, label: "View Products", key: "products" },
          { isLink: true, url: "/", label: "Learn More", key: "about" },
        ],
      }}
    />
  </ThemeProvider>
));

stories.add("Single Video", () => (
  <ThemeProvider theme={defaultTheme}>
    <SingleMediaRendered
      url="/assets/videos/testVideo.mp4"
      alt="video"
      type={SingleMediaOptions.VIDEO}
      shouldShowOverlay={true}
      containerStyles={(theme: any) => css`
        width: 100%;
        ${theme.breakpoints({
          height: ["70vh", "70vh", "68vh"],
        })}
      `}
      overlayTextConfig={{
        contentAlignment: "flex-end",
        heading: "Story Theme",
        body: "A powerful theme built for modern commerce.",
        buttonsArray: [
          { isLink: false, label: "View Products", key: "products" },
          { isLink: true, url: "/", label: "Learn More", key: "about" },
        ],
      }}
    />
  </ThemeProvider>
));

stories.add("Single Image with content", () => (
  <ThemeProvider theme={defaultTheme}>
    <SingleMediaRendered
      url="/assets/images/potraitSmall.webp"
      mediaStyles={() => css`
        object-fit: cover;
      `}
      containerStyles={() => css`
        width: 500px;
        height: 800px;
      `}
      alt="image"
      type={SingleMediaOptions.IMAGE}
      shouldShowOverlay={false}
      footerTextConfig={{
        heading: "Turquoise Halter Tank",
        body: "Turquoise",
        price: "$80.00",
      }}
    />
  </ThemeProvider>
));
