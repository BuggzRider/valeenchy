import Collapsible from "react-collapsible";
import {
  CollapsibleComponentListTypes,
  CollapsibleComponentPropsTypes,
} from "./types";

const CollapsibleComponent = ({
  items,
  styles,
}: CollapsibleComponentPropsTypes) => {
  return (
    <div css={(theme) => styles(theme)}>
      {items.map((item: CollapsibleComponentListTypes) => {
        return (
          <Collapsible
            key={item.key}
            easing={"cubic-bezier(0.215, 0.61, 0.355, 1)"}
            trigger={item.triggerElement}
          >
            {item.childElement}
          </Collapsible>
        );
      })}
    </div>
  );
};

export default CollapsibleComponent;
