/** @format */

import CardActionType from "./card,type";

export const checkImageLoad = () => ({
  type: CardActionType.IMAGE_IS_LOAD,
});

export const checkARIsPointer = () => ({
  type: CardActionType.AR_ALREADY_POINTER,
});

export const checkFirstLoad = () => ({
  type: CardActionType.CHECK_FIRST_LOAD,
});
