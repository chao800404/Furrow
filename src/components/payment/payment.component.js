/** @format */

import { PaymentContainer, PaymentStep } from "./payment.styles";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Button from "../../components/button/button.component";
import { useState, useEffect, useCallback, useRef } from "react";
import PaymentForm from "../paymentForm/paymentForm.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemTotalPrice } from "../../redux/cart/cart.select";
import { cartPayment } from "../../redux/cart/cart.action";
import FinishIconAn from "../finishIcon/finishIcon.component";
import Spinner from "../../components/spinner/spinner.component";
import primaryColor from "../../theme/priamry.styles";
import toast from "react-hot-toast";
import { paymentMessage } from "../../config/message";

const formType = ["firstForm", "secondForm", "secondForm"];

const buttonChildren = {
  0: "NEXT",
  1: "PROCEED TO CHECKOUT",
  3: "FINISH",
};

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      fontWeight: "bold",
    },
  },
};

const Payment = ({ cartItem }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [currentStep, setCurrentStep] = useState(0);
  const [userDataComplete, setUserDataComplete] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const totalPrice = useSelector(selectCartItemTotalPrice);
  const elemRef = useRef(null);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    secondName: "",
    paymentEmail: "",
    phone: "",
    state: "",
    city: "",
    addressLine: "",
    ConfirmAddressLine: "",
  });

  console.log(cartItem);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (currentStep < 1) trasnfrerStep();
    if (!stripe || !elements || currentStep < 1) return;
    if (totalPrice <= 0) {
      toast.error(paymentMessage.CART_EMPTY);
      return;
    }
    if (currentStep >= 3 && paymentSuccess) {
      setCurrentStep((prevStep) => (prevStep = 0));
      setPaymentSuccess((prevPaymentSuccess) => (prevPaymentSuccess = false));
      setUserData(
        (prevUser) =>
          (prevUser = {
            firstName: "",
            secondName: "",
            paymentEmail: "",
            phone: "",
            state: "",
            city: "",
            addressLine: "",
            ConfirmAddressLine: "",
          })
      );
      return;
    }

    if (userData.addressLine !== userData.ConfirmAddressLine) {
      toast.error(paymentMessage.ERRORADDRESS);
      return;
    }
    if (!userDataComplete) {
      toast.error(paymentMessage.INCOMPLETE);
      return;
    }
    setLoading((prev) => (prev = true));
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice }),
    });
    const {
      paymentIntent: { client_secret, id },
    } = await response.json();

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${userData.firstName} ${userData.secondName}`,
          address: {
            line1: `${userData.addressLine}`,
            city: `${userData.city}`,
          },
          email: `${userData.paymentEmail}`,
          phone: `${userData.phone}`,
        },
      },
    });

    setLoading((prev) => (prev = false));
    if (paymentResult.error) {
      toast.error(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setPaymentSuccess((prePayment) => (prePayment = true));
        setCurrentStep((prevStep) => (prevStep = 3));
        dispatch(cartPayment({ customData: userData, id, order: cartItem }));
      }
    }
  };

  const trasnfrerStep = useCallback(
    (step) => {
      setCurrentStep((prev) => {
        if (step && step < 1) return (prev = Number.parseInt(step));
        else {
          return currentStep < 1 ? (prev = prev + 1) : prev;
        }
      });
    },
    [currentStep]
  );

  useEffect(() => {
    setUserDataComplete(
      (prev) =>
        (prev = [...Object.values(userData)].every((data) => data !== ""))
    );
  }, [userData]);

  useEffect(() => {
    const inputType = [...formRef.current];
    inputType.forEach((input) => {
      input.value = userData[input.name];
    });
  }, [currentStep, userData]);

  const transferStep = (e) => {
    const step = e.target.dataset.step;
    if (!step) return;
    trasnfrerStep(step);
  };

  useEffect(() => {
    const stepElem = [...elemRef.current.children];
    stepElem.forEach((elem) => {
      elem.style.backgroundColor = "#d1d1d1";
      if (elem.dataset.step <= currentStep)
        elem.style.backgroundColor = "#161616";
    });
  }, [currentStep]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    setUserData({ ...userData, [name]: e.target.value });
    setErrorMessage((prevError) => (prevError = undefined));
  };

  return (
    <PaymentContainer
      ref={formRef}
      onChange={handleOnChange}
      onSubmit={handleSubmit}
    >
      <span className="form-title">ORDER SUMMARY</span>
      <PaymentStep ref={elemRef} onClick={transferStep}>
        <span data-step="0" className="form-step form-step-1">
          1
        </span>
        <span data-step="0" className="form-path form-path-1"></span>
        <span data-step="1" className="form-step form-step-2">
          2
        </span>
        <span data-step="1" className="form-path form-path-2"></span>
        <span data-step="2" className="form-step form-step-3">
          3
        </span>
      </PaymentStep>
      {paymentSuccess ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FinishIconAn height="90%" width="90%" play={true} />
          <h3>SUCCESSFUL!! THANK YOU !</h3>
          <p> You can check order on email </p>
        </div>
      ) : (
        <div>
          <PaymentForm
            value={userData}
            type={formType[currentStep]}
            totalPrice={totalPrice}
          />

          <CardElement options={CARD_OPTIONS} />
        </div>
      )}

      <p style={{ letterSpacing: ".05rem", color: primaryColor.cursorColor }}>
        {errorMessage ? errorMessage : ""}
      </p>

      <Button
        data=""
        style={{ marginTop: "1rem", paddingTop: "1.5rem", height: "5rem" }}
      >
        {loading ? (
          <Spinner style={{ height: "3rem" }} width="3rem" height="3rem" />
        ) : (
          buttonChildren[currentStep]
        )}
      </Button>
    </PaymentContainer>
  );
};

export default Payment;
