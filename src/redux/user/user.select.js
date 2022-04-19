/** @format */

import { createSelector } from "reselect";

const selectUser = ({ user }) => user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser?.user
);

export const selectCurrentUserLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);
