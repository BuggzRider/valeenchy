import {
  burgerButtonContainer,
  burgerButtonStyles,
} from "./styles";

const BurgerIconButton = ({ onClickhandler }: any) => {
  return (
    <div css={(theme) => burgerButtonContainer(theme)} onClick={onClickhandler}>
        <span css={(theme) => burgerButtonStyles(theme)}>&nbsp;</span>
    </div>
  );
};

export default BurgerIconButton;
