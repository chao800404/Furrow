/** @format */

import HeaderActionType from "./header.type";

export const headerAnComplete = (anComplete) => ({
  type: HeaderActionType.HEADER_AN_COMPLETE,
  payload: anComplete,
});
