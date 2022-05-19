/** @format */
import {
  CheckoutListContainer,
  CheckoutListTitle,
} from "./checkout-list.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutList = ({ productName, description, cartItem }) => {
  return (
    cartItem && (
      <CheckoutListContainer>
        <CheckoutListTitle>
          <h3>
            {productName}
            <span>{description}</span>
          </h3>
        </CheckoutListTitle>
        {cartItem.map((cartItem) => (
          <CheckoutItem key={cartItem._key} {...cartItem} />
        ))}
      </CheckoutListContainer>
    )
  );
};

export default CheckoutList;
