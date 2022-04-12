/** @format */
import {
  CheckoutListContainer,
  CheckoutListTitle,
} from "./checkout-list.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutList = ({ productTitle, statement, cartItem }) => {
  return (
    <CheckoutListContainer>
      <CheckoutListTitle>
        <h3>
          {productTitle}
          <span>{statement}</span>
        </h3>
      </CheckoutListTitle>
      {cartItem.map((cartItem) => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
    </CheckoutListContainer>
  );
};

export default CheckoutList;
