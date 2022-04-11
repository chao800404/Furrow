/** @format */

export const addItemToCart = (preCartItem, newCartItem) => {
  const { id } = newCartItem;
  const cartItemMap = {};
  preCartItem.forEach((cartItem) => {
    cartItemMap[cartItem.id] = cartItem;
  });
  if (cartItemMap[id]) {
    cartItemMap[id].quantity =
      Number(cartItemMap[id].quantity) + Number(newCartItem.quantity);
  } else {
    cartItemMap[id] = newCartItem;
  }

  return Object.values(cartItemMap);
};

export const removeItemToCart = (prevCartItem, itemId) =>
  prevCartItem.filter((item) => item.id !== itemId);

export const updateItemToCart = (prevCartItem, updateItem) =>
  prevCartItem.map((cartItem) =>
    cartItem.id === updateItem.id
      ? { ...cartItem, quantity: updateItem.quantity }
      : cartItem
  );
