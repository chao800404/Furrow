/** @format */

import { createSelector } from "reselect";

const selectPost = ({ post }) => post;

export const selectPostData = createSelector(
  [selectPost],
  (selectPost) => selectPost?.postData
);

export const selectLatestPost = createSelector(
  [selectPostData],
  (selectPost) => {
    const transferPostToObject = selectPost.reduce((acc, post) => {
      acc[Date.parse(post._updatedAt)] = post;
      return acc;
    }, {});
    const postDateKeyToMap = Object.keys(transferPostToObject);
    const latestPostTime = Math.max(...postDateKeyToMap);
    return transferPostToObject[latestPostTime] || null;
  }
);
