/** @format */

import { call, put, takeLatest, all } from "redux-saga/effects";
import ActionUserType from "./user.type";
import {
  signInWithExpress,
  auth,
  googleProvider,
  facebookProvider,
  createUserProfileDoc,
  currentUser,
  signOutAuth,
  createUserWithEmail,
  signInWithEmail,
  sendRestEmail,
} from "../../firebase/firebase.utils";

import {
  expressSignInSuccess,
  signInFailure,
  signOutSuccess,
} from "./user.actions";

function* expressUserSignIn({ payload: expressType }) {
  try {
    yield signInWithExpress({
      auth,
      provider: expressType === "google" ? googleProvider : facebookProvider,
      type: expressType,
    });
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* createAccountSuccessful({ payload: { email, password } }) {
  try {
    yield createUserWithEmail({ auth, email, password });
    yield onUserAuth();
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signWithEamilSuccess({ payload: { email, password } }) {
  try {
    yield signInWithEmail({ auth, email, password });
    yield onUserAuth();
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* sendPasswordWithEmail({ payload: { email } }) {
  try {
    yield sendRestEmail({ auth, email });
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* getSnapshopFromUserAuth(userData) {
  try {
    yield createUserProfileDoc(userData);
    yield put(expressSignInSuccess(userData));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onUserAuth() {
  try {
    const user = yield currentUser();
    yield getSnapshopFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onSignOutAuth() {
  try {
    yield console.log(true);
    yield signOutAuth(auth);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* expressUserStart() {
  yield takeLatest(ActionUserType.EXPRESS_SIGNIN_START, expressUserSignIn);
}

export function* createAccountStart() {
  yield takeLatest(
    ActionUserType.CREATE_ACCOUNT_START,
    createAccountSuccessful
  );
}

export function* signInWithEmailStart() {
  yield takeLatest(
    ActionUserType.SIGN_IN_WITH_EMAIL_START,
    signWithEamilSuccess
  );
}

export function* sendChangePasswordEmailStart() {
  yield takeLatest(
    ActionUserType.SEND_CHANGE_PASSWORD_EMAIL,
    sendPasswordWithEmail
  );
}

export function* checkUserSession() {
  yield takeLatest(ActionUserType.CHECK_USER_SESSION, onUserAuth);
}

export function* onSignOut() {
  yield takeLatest(ActionUserType.SIGN_OUT_START, onSignOutAuth);
}

const userSagas = function* () {
  yield all([
    call(expressUserStart),
    call(checkUserSession),
    call(onSignOut),
    call(signInWithEmailStart),
    call(createAccountStart),
    call(sendChangePasswordEmailStart),
  ]);
};

export default userSagas;
