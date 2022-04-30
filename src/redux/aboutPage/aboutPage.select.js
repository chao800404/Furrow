/** @format */

import { createSelector } from "reselect";

const selectAboutPage = ({ about }) => about.aboutData;

export const selectAboutPageData = createSelector(
  [selectAboutPage],
  (aboutData) => (aboutData ? aboutData : null)
);
