/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from "@emotion/react";

export const photoCollageMock = {
  oneImage: {
    width: "100%",
    height: "100%",
    url: "",
    styles: (_theme: any) => css`
      width: 100%;
      height: 100%;
    `,
    alt: "",
  },
};

export const photoCollageItems = [photoCollageMock.oneImage];
