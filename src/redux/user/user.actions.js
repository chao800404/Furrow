/** @format */

import ActionUserType from "./user.type";

export const expressSignInStart = (expressType) => ({
  type: ActionUserType.EXPRESS_SIGNIN_START,
  payload: expressType,
});

export const expressSignInSuccess = (user) => ({
  type: ActionUserType.EXPRESS_SIGNIN_SUCCESS,
  payload: user,
});

export const createAccountStart = (userData) => ({
  type: ActionUserType.CREATE_ACCOUNT_START,
  payload: userData,
});

export const sendChangePasswordEmailStart = (userEmail) => ({
  type: ActionUserType.SEND_CHANGE_PASSWORD_EMAIL,
  payload: userEmail,
});

export const signWithEmailStart = (userData) => ({
  type: ActionUserType.SIGN_IN_WITH_EMAIL_START,
  payload: userData,
});

export const signInFailure = (error) => ({
  type: ActionUserType.SING_IN_FAILURE,
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
