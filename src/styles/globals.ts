import { injectGlobal } from "@emotion/css";

injectGlobal`
:root {
}

@media (prefers-color-scheme: dark) {
}

*,
*::after,
*::before {
  box-sizing: border-box;
  min-height: 0;
  min-width: 0;
  margin: 0;
  padding: 0;
}

html {
  max-width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  max-width: 100vw;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

li {
  list-style-type: none;
}

`;
