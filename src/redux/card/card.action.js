/** @format */

import CardActionType from "./card,type";

export const checkImageLoad = () => ({
  type: CardActionType.IMAGE_IS_LOAD,
});

export const cardClickToggle = (toggleClick) => ({
  type: CardActionType.BUTTON_TOGGLE_CLICK,
  payload: toggleClick,
});
