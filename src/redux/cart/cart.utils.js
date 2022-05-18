/** @format */

export const addItemToCart = (preCartItem, newCartItem) => {
  const { _key } = newCartItem;
  const cartItemMap = {};
  preCartItem.forEach((cartItem) => {
    cartItemMap[cartItem._key] = cartItem;
  });
  if (cartItemMap[_key]) {
    cartItemMap[_key].quantity =
      Number(cartItemMap[_key].quantity) + Number(newCartItem.quantity);
  } else {
    cartItemMap[_key] = newCartItem;
  }

  return Object.values(cartItemMap);
};

export const removeItemToCart = (prevCartItem, itemId) =>
  prevCartItem.filter((item) => item._key !== itemId);

export const updateItemToCart = (prevCartItem, updateItem) =>
  prevCartItem.map((cartItem) =>
    cartItem._key === updateItem._key
      ? { ...cartItem, quantity: updateItem.quantity }
      : cartItem
  );
