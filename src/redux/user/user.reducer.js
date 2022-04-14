/** @format */

import ActionUserType from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionUserType.EXPRESS_SIGNIN_START:
      return state;
    case ActionUserType.EXPRESS_SIGNIN_SUCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ActionUserType.EXPRESS_SIGNIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ActionUserType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
