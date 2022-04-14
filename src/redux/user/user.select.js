/** @format */

import { createSelector } from "reselect";

const selectUser = ({ user }) => user.currentUser;

export const selectCurrentUser = createSelector([selectUser], (user) =>
  user ? user.user : null
);
