/** @format */

import ActionUserType from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  errorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionUserType.EXPRESS_SIGNIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionUserType.EXPRESS_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case ActionUserType.SING_IN_FAILURE:
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
