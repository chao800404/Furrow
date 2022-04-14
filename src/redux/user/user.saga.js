/** @format */

import { call, put, takeLatest, all, takeEvery } from "redux-saga/effects";
import ActionUserType from "./user.type";
import {
  signInWithExpress,
  auth,
  googleProvider,
  facebookProvider,
  createUserProfileDoc,
  currentUser,
  signOutAuth,
} from "../../firebase/firebase.utils";
import {
  expressSignInSuccess,
  expressSignInFailure,
  signOutSuccess,
} from "./user.actions";

function* getSnapshopFromUserAuth(userData) {
  try {
    yield createUserProfileDoc(userData);
    yield put(expressSignInSuccess(userData));
  } catch (error) {
    yield put(expressSignInFailure(error));
  }
}

function* expressUserSignIn({ payload: expressType }) {
  try {
    yield signInWithExpress({
      auth,
      provider: expressType === "google" ? googleProvider : facebookProvider,
      type: expressType,
    });
  } catch (error) {
    yield put(expressSignInFailure(error));
  }
}

function* onUserAuth() {
  try {
    const user = yield currentUser();
    yield getSnapshopFromUserAuth(user);
  } catch (error) {
    yield put(expressSignInFailure(error));
  }
}

function* onSignOutAuth() {
  try {
    yield console.log(true);
    yield signOutAuth(auth);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(expressSignInFailure(error));
  }
}

export function* expressUserStart() {
  yield takeLatest(ActionUserType.EXPRESS_SIGNIN_START, expressUserSignIn);
}

export function* checkUserSession() {
  yield takeLatest(ActionUserType.CHECK_USER_SESSION, onUserAuth);
}

export function* onSignOut() {
  yield takeLatest(ActionUserType.SIGN_OUT_START, onSignOutAuth);
}

const userSagas = function* () {
  yield all([call(expressUserStart), call(checkUserSession), call(onSignOut)]);
};

export default userSagas;
