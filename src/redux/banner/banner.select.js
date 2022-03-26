/** @format */
import { createSelector } from "reselect";

const selectBanner = ({ banner }) => banner;

export const selectBannerDrawing = createSelector(
  [selectBanner],
  (banner) => banner.drawing
);
