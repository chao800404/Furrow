/** @format */

import ShopPageActionType from "./shopPage.type";

const INITAIL_STATE = {
  isFetching: false,
  message: undefined,
  shopPageData: null,
};

const shopPageReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case ShopPageActionType.FETCHING_SHOPPAGE_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopPageActionType.FETCHING_SHOPPAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shopPageData: action.payload,
      };
    case ShopPageActionType.FETCHING_SHOPPAGE_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default shopPageReducer;
