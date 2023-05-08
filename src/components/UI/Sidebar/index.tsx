import { SidebarPropTypes } from "./types";
import {
  sidebarListWrapper,
  sidebarChildContainer,
  sidebarListCloseButtonContainer,
} from "./styles";
import { css } from "@emotion/react";
import CloseButton from "components/UI/Buttons/CloseButton";

const Sidebar = ({
  children,
  isSidebarOpen,
  setIsSidebarOpen,
  extraStyles,
  closeButtonColor,
}: SidebarPropTypes) => {
  return (
    <div
      css={(theme) => [
        sidebarListWrapper(theme),
        extraStyles?.sidebarListWrapperExtraStyles?.(theme),
        isSidebarOpen ? extraStyles?.sidebarListContainerOpen(theme) : css``,
      ]}
    >
      <div css={(theme) => sidebarListCloseButtonContainer(theme)}>
        <CloseButton
          onClickhandler={() => setIsSidebarOpen(false)}
          closeButtonColor={closeButtonColor}
        />
      </div>
      <div
        css={(theme) => [
          sidebarChildContainer(theme),
          extraStyles?.sidebarChildrenExtraStyles?.(theme),
        ]}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
