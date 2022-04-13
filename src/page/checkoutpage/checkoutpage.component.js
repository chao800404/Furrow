/** @format */
import data from "./checkoutPage.data";
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
import { useNavigate } from "react-router-dom";
import CheckoutList from "../../components/checkout-list/checkout-list.component";
import Button from "../../components/button/button.component";
import { useState } from "react";

const CheckOutPage = () => {
  const cartItem = useSelector(selectClassificationCartItem);
  const totalQuantity = useSelector(selectCartAmount);
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(false);

  const handleTransferSignIn = (e) => {
    const btnType = e.target.dataset.type;
    if (btnType === "sign-in") navigate("/signin", { replace: true });
    if (btnType === "reject") setSignIn(true);
  };

  return (
    <section style={{ minHeight: "100vh", padding: "20rem 0" }}>
      <Flex>
        <CheckoutContainer>
          {signIn ? null : (
            <CheckoutSignIn onClick={handleTransferSignIn}>
              <span>
                Already a member? Login for easier order tracking and
                fastercheckout!
              </span>
              <Button
                data="reject"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #161616",
                  color: "#161616",
                }}
              >
                REJECT
              </Button>
              <Button data="sign-in">SIGN IN</Button>
            </CheckoutSignIn>
          )}

          <CheckoutListContainer>
            <h1>{data.title}</h1>
            <p>
              {data.shippingStatement[0]}
              <br />
              {data.shippingStatement[1]}
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
