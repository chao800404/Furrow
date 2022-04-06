/** @format */
import { ButtonContainer } from "./button.style";
import { useNavigate } from "react-router-dom";
import React from "react";
const Button = (props) => {
  const navigate = useNavigate();
  const typeCheck = props.type === "secondCard";
  const dataset = props.data;
  return (
    <ButtonContainer
      onClick={() =>
        props.path ? navigate(props.path, { replace: false }) : null
      }
      whileTap={typeCheck ? { scale: 0.95, y: "55%" } : { scale: 0.98, y: 2 }}
      initial={typeCheck ? { y: "50%" } : { y: "0" }}
      data-type={dataset ? dataset : null}
    >
      {props.children}
    </ButtonContainer>
  );
};

export default React.memo(Button);
