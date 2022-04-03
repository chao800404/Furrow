/** @format */
import { ButtonContainer } from "./button.style";

const Button = (props) => {
  return (
    <ButtonContainer whileTap={{ scale: ".98", y: 1 }}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
