/** @format */

import { createSelector } from "reselect";

const selectCard = ({ card }) => card;

export const selectCardLoad = createSelector(
  [selectCard],
  (selectCard) => selectCard.imageLoad
);

export const selectCardIsPointer = createSelector(
  [selectCard],
  (selectCard) => selectCard.isPointer
);

export const selectCardFirstLoad = createSelector(
  [selectCard],
  (selectCard) => selectCard.firstLoad
);
