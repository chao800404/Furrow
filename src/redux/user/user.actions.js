/** @format */

import ActionUserType from "./user.type";

export const expressSignInStart = (expressType) => ({
  type: ActionUserType.EXPRESS_SIGNIN_START,
  payload: expressType,
});

export const expressSignInSuccess = (user) => ({
  type: ActionUserType.EXPRESS_SIGNIN_SUCESS,
  payload: user,
});

export const expressSignInFailure = (error) => ({
  type: ActionUserType.EXPRESS_SIGNIN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: ActionUserType.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: ActionUserType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: ActionUserType.SIGN_OUT_SUCCESS,
});
