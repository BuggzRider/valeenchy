import { injectGlobal } from "@emotion/css";

injectGlobal`
:root {
}

@media (prefers-color-scheme: dark) {
}

*,
*::after,
*::before {
  min-height: 0;
  min-width: 0;
  margin: 0;
  padding: 0;
}

html {
  max-width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  max-width: 100vw;
  overflow-x: hidden;
  font-size: 1em;
  line-height: 1.5;
  color: #6b7177;
  font-weight: 400;
  background: #ffffff;
}
`;
