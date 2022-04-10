/** @format */

import { CartItemContainer, CartTotal, CartListItem } from "./cartList.styles";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartToggleHidden } from "../../redux/cart/cart.select";
import CartItem from "../cartItem/cartItem.component";
import { selectCartItem } from "../../redux/cart/cart.select";
import { cartToggleHoverd } from "../../redux/cart/cart.action";

const CardList = () => {
  const hidden = useSelector(selectCartToggleHidden);
  const cartItem = useSelector(selectCartItem);
  const dispatch = useDispatch();

  return hidden ? (
    <CartItemContainer
      onMouseEnter={() => dispatch(cartToggleHoverd())}
      onMouseLeave={() => dispatch(cartToggleHoverd())}
    >
      <CartListItem>
        {cartItem?.map(({ id, ...otherProps }) => (
          <CartItem key={id} {...otherProps} />
        ))}
      </CartListItem>
      <CartTotal>
        <h3>Estimated Total:</h3>
        <span>NT$ 17372</span>
      </CartTotal>
      <Button
        style={{
          gridRow: "3/ 4",
          gridColumn: "1 / -1",
          letterSpacing: ".2rem",
          fontWeight: "300",
        }}
      >
        CHECKOUT
      </Button>
    </CartItemContainer>
  ) : null;
};

export default CardList;
