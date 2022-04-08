/** @format */

import { createSelector } from "reselect";

const selectCard = ({ card }) => card;

export const selectCardLoad = createSelector(
  [selectCard],
  (selectCard) => selectCard.imageLoad
);

export const selectCardBtn = createSelector(
  [selectCard],
  (selectCard) => selectCard.toggleClick
);
