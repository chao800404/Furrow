/** @format */

import { CartItemContainer, CartTotal, CartListItem } from "./cartList.styles";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartToggleHidden } from "../../redux/cart/cart.select";
import CartItem from "../cartItem/cartItem.component";
import {
  selectCartItem,
  selectCartItemTotalPrice,
} from "../../redux/cart/cart.select";
import {
  cartToggleHoverd,
  cartToggleHidden,
} from "../../redux/cart/cart.action";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const CardList = () => {
  const hidden = useSelector(selectCartToggleHidden);
  const cartItem = useSelector(selectCartItem);
  const totalPrice = useSelector(selectCartItemTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    !hidden && (
      <CartItemContainer
        onMouseEnter={() => dispatch(cartToggleHoverd())}
        onMouseLeave={() => dispatch(cartToggleHoverd())}
        onClick={(e) => {
          if (e.target.dataset.type !== "check-out") return;
          navigate("/checkout");
          dispatch(cartToggleHidden());
        }}
      >
        <IoClose
          style={{
            color: "#161616",
            gridRow: "1 / 2",
            gridColumn: "1/-1",
            fontSize: "2rem",
          }}
          onClick={() => dispatch(cartToggleHidden())}
        />
        <CartListItem>
          {cartItem?.map((cartItem) => {
            const { _key } = cartItem;
            console.log(cartItem);
            return <CartItem key={_key} {...cartItem} />;
          })}
        </CartListItem>
        <CartTotal>
          <h3>Estimated Total:</h3>
          <span>NT$ {totalPrice.toLocaleString()}</span>
        </CartTotal>
        <Button
          style={{
            gridRow: "4/ 5",
            gridColumn: "1 / -1",
            letterSpacing: ".2rem",
            fontWeight: "300",
          }}
          data="check-out"
        >
          CHECKOUT
        </Button>
      </CartItemContainer>
    )
  );
};

export default CardList;
