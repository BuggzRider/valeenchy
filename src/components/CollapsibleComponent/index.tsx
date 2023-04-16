import { Key } from "react";
import Collapsible from "react-collapsible";
import {
  collapsibleComponentContainer,
  collapsibleComponentHeader,
  collapsibleComponentHeaderWrapper,
  collapsibleComponentItem,
  collapsibleComponentItemHeading,
  collapsibleComponentItemHeadingArrow,
  collapsibleComponentItemHeadingWrapper,
  collapsibleComponentWrapper,
} from "./styles";
import {
  CollapsibleComponentListTypes,
  CollapsibleComponentPropsTypes,
} from "./types";

const CollapsibleComponent = ({
  heading,
  items,
}: CollapsibleComponentPropsTypes) => {
  return (
    <div css={(theme) => collapsibleComponentWrapper(theme)}>
      {heading && (
        <div css={() => collapsibleComponentHeaderWrapper()}>
          <p css={(theme) => collapsibleComponentHeader(theme)}>{heading}</p>
        </div>
      )}
      <div css={() => collapsibleComponentContainer()}>
        {items.map((item: CollapsibleComponentListTypes) => {
          return (
            <Collapsible
              key={item.key}
              easing={"cubic-bezier(0.215, 0.61, 0.355, 1)"}
              trigger={
                <div
                  css={(theme) => collapsibleComponentItemHeadingWrapper(theme)}
                >
                  <p css={() => collapsibleComponentItemHeading()}>
                    {item.heading}
                  </p>
                  <span css={() => collapsibleComponentItemHeadingArrow()}>
                    {" "}
                  </span>
                </div>
              }
            >
              {item.body.map((bodyItem) => (
                <p
                  css={(theme) => collapsibleComponentItem(theme)}
                  key={bodyItem as Key}
                >
                  {bodyItem}
                </p>
              ))}
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default CollapsibleComponent;
