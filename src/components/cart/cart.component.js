/** @format */

import { CartContainer } from "./cart.styles";
import { BsFillBagFill } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
import CardList from "../cartList/cartList.conponent";
import { useDispatch, useSelector } from "react-redux";
import {
  cartToggleHidden,
  cartOnScrollHidden,
} from "../../redux/cart/cart.action";
import {
  selectCartAmount,
  selectCartToggleHovered,
} from "../../redux/cart/cart.select";

const Cart = () => {
  const [position, setPosition] = useState({
    current: 0,
    delay: 0,
  });
  const { current, delay } = position;
  const dispatch = useDispatch();
  const cartAmount = useSelector(selectCartAmount);
  const hovered = useSelector(selectCartToggleHovered);

  const handleScroll = useCallback(() => {
    const currentPostion = document.documentElement.scrollTop;
    setPosition({ ...position, current: currentPostion });
    const timeOut = setTimeout(
      () => setPosition({ ...position, delay: position.current }),
      500
    );
    if (current === delay) clearTimeout(timeOut);
  }, [current, delay, position]);

  useEffect(() => {
    if (current === delay) {
      dispatch(cartOnScrollHidden());
    }
  }, [current, delay, dispatch]);

  useEffect(() => {
    if (hovered) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, hovered]);

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
      <div onClick={() => dispatch(cartToggleHidden())}>
        <h5>YOUR CART</h5>
        <p>{cartAmount}</p>
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
      </div>
    </CartContainer>
  );
};

export default Cart;
