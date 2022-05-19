/** @format */

import { createSelector } from "reselect";

const selectAboutPage = ({ about }) => about;

export const selectAboutPageData = createSelector(
  [selectAboutPage],
  (about) => about?.aboutData || {}
);
