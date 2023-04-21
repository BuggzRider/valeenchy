import { ThemeProvider } from "@emotion/react";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "styles/theme";
import CollapsibleComponent from ".";
import { collapsibleComponent } from "./mock";

const stories = storiesOf("Collapsible Component", module);

stories.add("Collapsible component", () => (
  <ThemeProvider theme={defaultTheme}>
    <CollapsibleComponent
      heading={"A few things you might be wondering"}
      items={collapsibleComponent}
    />
  </ThemeProvider>
));
