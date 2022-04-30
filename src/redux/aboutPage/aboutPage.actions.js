/** @format */

import AboutPageType from "./aboutPage.type";

export const aboutPageAction = () => ({
  type: AboutPageType.FETCHING_ABOUT_DATA_START,
});

export const aboutPageSuccess = (data) => ({
  type: AboutPageType.FETCHING_ABOUT_DATA_SUCCESS,
  payload: data,
});

export const aboutPageFailure = (error) => ({
  type: AboutPageType.FETCHING_ABOUT_DATA_FAILURE,
  payload: error,
});
