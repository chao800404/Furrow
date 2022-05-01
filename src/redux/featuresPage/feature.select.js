/** @format */

import { createSelector } from "reselect";

const featurePage = ({ feature }) => feature;

export const featurePageData = createSelector(
  [featurePage],
  (feature) => feature?.featureData
);
