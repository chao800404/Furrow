/** @format */
import { Flex } from "../../components/Flex/flex.styles";
import { useSelector } from "react-redux";
import {
  selectClassificationCartItem,
  selectCartAmount,
} from "../../redux/cart/cart.select";
import {
  CheckoutContainer,
  CheckoutListContainer,
  CheckoutPament,
  CheckoutHeader,
  CheckoutSignIn,
} from "./checkoutpage.styles";
import CheckoutList from "../../components/checkout-list/checkout-list.component";
import Button from "../../components/button/button.component";

const CheckOutPage = () => {
  const cartItem = useSelector(selectClassificationCartItem);
  const totalQuantity = useSelector(selectCartAmount);
  return (
    <section style={{ minHeight: "100vh", padding: "20rem 0" }}>
      <Flex>
        <CheckoutContainer>
          <CheckoutSignIn>
            <span>
              Already a member? Login for easier order tracking and
              fastercheckout!
            </span>
            <Button
              style={{
                backgroundColor: "#fff",
                border: "1px solid #161616",
                color: "#161616",
              }}
            >
              REJECT
            </Button>
            <Button>SIGN IN</Button>
          </CheckoutSignIn>
          <CheckoutListContainer>
            <h1>Shipping & Delivery:</h1>
            <p>
              Domestic orders for Taiwan area are expected to be processed
              within seven business days.
              <br />
              For shipping and delivery policies for overseas regions, please
              visit the online store relevant to your location of residence.
            </p>
            <CheckoutHeader>
              <span>ITEM(S) &nbsp; {totalQuantity}</span>
              <span>PRODCUT</span>
              <span>PRICE</span>
              <span>QTY</span>
              <span>SUB TOTAL</span>
            </CheckoutHeader>
            {cartItem.map((cartItem, index) => (
              <CheckoutList key={index} {...cartItem} />
            ))}
          </CheckoutListContainer>
          <CheckoutPament>
            <div>hellow</div>
          </CheckoutPament>
        </CheckoutContainer>
      </Flex>
    </section>
  );
};

export default CheckOutPage;
