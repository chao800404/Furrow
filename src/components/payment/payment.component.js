/** @format */

import { PaymentContainer, PaymentStep } from "./payment.styles";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import Button from "../../components/button/button.component";
import { useState, useEffect, useCallback, useRef } from "react";
import PaymentForm from "../paymentForm/paymentForm.component";

const formType = ["firstForm", "secondForm"];

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [currentStep, setCurrentStep] = useState(0);
  const elemRef = useRef(null);
  const formRef = useRef(null);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(error, paymentMethod);
  };
  const trasnfrerStep = useCallback((step) => {
    setCurrentStep((prev) => (prev = step));
  }, []);

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
      if (elem.dataset.step === currentStep + "")
        elem.style.backgroundColor = "#161616";
    });
  }, [currentStep]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    setUserData({ ...userData, [name]: e.target.value });
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
      <PaymentForm value={userData} type={formType[currentStep]} />
      <Button style={{ marginTop: "2rem" }}>Next</Button>
    </PaymentContainer>
  );
};

export default Payment;
