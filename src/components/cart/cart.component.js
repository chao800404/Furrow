/** @format */

import { CartContainer } from "./cart.styles";
import { BsFillBagFill } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
import CardList from "../cartList/cartList.conponent";

const Cart = () => {
  const [position, setPosition] = useState({
    current: 0,
    delay: 0,
  });

  const handleScroll = useCallback(() => {
    const { current, delay } = position;
    const currentPostion = document.documentElement.scrollTop;
    setPosition({ ...position, current: currentPostion });

    const timeOut = setTimeout(
      () => setPosition({ ...position, delay: position.current }),
      500
    );
    if (current === delay) clearTimeout(timeOut);
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <CartContainer
      animate={
        position.current === position.delay
          ? { x: 0, opacity: 1 }
          : { x: 500, opacity: 0 }
      }
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <CardList />
      <h5>Your Cart</h5>
      <p>0</p>
      <BsFillBagFill
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "5rem",
          zIndex: 1,
        }}
      />
    </CartContainer>
  );
};

export default Cart;
