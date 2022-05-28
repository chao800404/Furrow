/** @format */

import {
  CartItemContainer,
  CartTotal,
  CartListItem,
  CartListEmpty,
} from "./cartList.styles";
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
import LottieContainer from "../lotiie-player/Lottie-container.component";
import emptyCart from "../../assets/lottie-json/empty-cart.json";
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
        data-type="cart-list"
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
          {cartItem.length <= 0 ? (
            <CartListEmpty>
              <LottieContainer className="empty-cart" lottieJson={emptyCart} />
              <p>Empty cart waiting for added product </p>
            </CartListEmpty>
          ) : (
            cartItem.map((cartItem) => {
              const { _key } = cartItem;
              return <CartItem key={_key} {...cartItem} />;
            })
          )}
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
