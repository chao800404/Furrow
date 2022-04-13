/** @format */
import { ButtonContainer } from "./button.style";
import { useNavigate } from "react-router-dom";
import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const Button = (props) => {
  const navigate = useNavigate();
  const typeCheck = props.type === "secondCard";
  const dataset = props.data;

  return (
    <ButtonContainer
      onClick={() =>
        props.path ? navigate(props.path, { replace: true }) : null
      }
      whileTap={typeCheck ? { scale: 0.95, y: "55%" } : { scale: 0.98, y: 2 }}
      initial={typeCheck ? { y: "50%" } : { y: "0" }}
      data-type={dataset ? dataset : null}
      style={props.style}
    >
      {props.type === "secondBtn" ? (
        <BsFillCartPlusFill
          style={{ marginRight: "1rem", fontSize: "1.5rem" }}
        />
      ) : null}
      {props.children}
    </ButtonContainer>
  );
};

export default React.memo(Button);
