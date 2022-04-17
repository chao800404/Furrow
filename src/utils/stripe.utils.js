/** @format */

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51KZDsJLVr9h1Udi2pQ8Dgj8DnFY7bOQtWxmB7hU8NN864LZB9EeCsZpppnK1bVlveYd8LOKCyilL0xlRn3kSTAo700OSYreBTn"
    );
  }
  return stripePromise;
};

export default getStripe;
