/** @format */

import { CartItemContainer } from "./cartItem.styles";
import { useState, useEffect } from "react";
import { IoTrashSharp } from "react-icons/io5";
import Button from "../../components/button/button.component";
import { useDispatch } from "react-redux";
import { removeCartItem, cartItemUpdate } from "../../redux/cart/cart.action";

const CartItem = ({ imageUrl, price, quantity, title, id }) => {
  const [quantitys, setQuantity] = useState(quantity);
  const [removeItem, setRemoveItem] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setQuantity(value);
    const parseIntQuantity = Number.parseInt(value);
    if (Number.isInteger(parseIntQuantity))
      dispatch(cartItemUpdate({ quantity: parseIntQuantity, id }));
  };

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  const handleClick = (e) => {
    const coverBtn = e.target.closest("[data-type]");
    if (coverBtn.dataset.type === "cancel") setRemoveItem(false);
    if (coverBtn.dataset.type === "remove") dispatch(removeCartItem(id));
  };

  return (
    <CartItemContainer>
      {removeItem ? (
        <div className="CartItem-cover" onClick={handleClick}>
          <p>Are you sure you want to remove this item?</p>
          <Button data="cancel">CANCEL</Button>
          <Button data="remove">REMOVE</Button>
        </div>
      ) : null}

      <img alt="imag" src={imageUrl.light} />
      <h3 className="CartItem-title">{title}</h3>
      <span className="CartItem-price">NT$ {price.toLocaleString()}</span>
      <div className="CartItem_quantity">
        <span>QUANTITY</span>
        <input type="number" value={quantitys} onChange={handleOnChange} />
      </div>

      <IoTrashSharp
        style={{
          fontSize: "2rem",
          alignSelf: "center",
          justifySelf: "end",
          marginRight: "1rem",
        }}
        onClick={(e) => setRemoveItem(true)}
      />
    </CartItemContainer>
  );
};

export default CartItem;
