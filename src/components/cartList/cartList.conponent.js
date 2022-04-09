/** @format */

import { CartItemContainer, CartTotal } from "./cartList.styles";
import Button from "../button/button.component";

const CardList = () => {
  return (
    <>
      <CartItemContainer>
        <CartTotal>
          <h3>Estimated Total:</h3>
          <span>NT$ 17372</span>
        </CartTotal>
        <Button
          style={{
            gridRow: "3/ 4",
            gridColumn: "1 / -1",
            letterSpacing: ".2rem",
          }}
        >
          CheckOut
        </Button>
      </CartItemContainer>
    </>
  );
};

export default CardList;
