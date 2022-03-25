/** @format */

import BannerType from "./banner.type";

const INITIAL_STATE = {
  drawing: false,
};

const bannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BannerType.ISDRAWING:
      return {
        ...state,
        drawing: true,
      };
    default:
      return state;
  }
};

export default bannerReducer;
