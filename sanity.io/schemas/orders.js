/** @format */

import { AiOutlineShoppingCart } from "react-icons/ai";

export default {
  name: "orders",
  title: "orders",
  type: "document",
  icon: AiOutlineShoppingCart,
  fields: [
    {
      name: "personName",
      title: "Person Name",
      type: "string",
    },
    {
      name: "personEmail",
      title: "Person Email",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "state",
      title: "State",
      type: "string",
    },
    {
      name: "addressLine",
      title: "Address Line",
      type: "string",
    },
  ],
};
