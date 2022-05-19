/** @format */

import { createSelector } from "reselect";

const featurePage = ({ feature }) => feature;

export const featurePageData = createSelector(
  [featurePage],
  (feature) => feature?.featureData || {}
);

export const featurePageFunction = createSelector(
  [featurePageData],
  (feature) => {
    const functions = feature?.functions || {};
    return Object.entries(functions)
      .filter((fun) => fun[0].includes("functionsContent"))
      .map((fun) => fun[1]);
  }
);
