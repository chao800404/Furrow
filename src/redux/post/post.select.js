/** @format */

import { createSelector } from "reselect";
import { memoize } from "lodash";
import { store } from "../store";

///////////////////////////////////////////////////////////////////////
/////  Sort                                                     //////
//////////////////////////////////////////////////////////////////////
const mergeSort = (arr) => {
  const len = arr.length;
  if (len < 2) return arr;
  const midd = Math.floor(len / 2);

  const leftArr = arr.filter((_, i) => i < midd);
  const rightArr = arr.filter((_, i) => i >= midd);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (left, right) => {
  const result = [];

  while (left?.length > 0 && right?.length > 0) {
    left[0] <= right[0]
      ? result.push(right.shift())
      : result.push(left.shift());
  }
  while (left?.length) result.push(left.shift());
  while (right?.length) result.push(right.shift());

  return result;
};

const selectPost = ({ post }) => post;
///////////////////////////////////////////////////////////////////////
/////  bookmark                                                  //////
//////////////////////////////////////////////////////////////////////

export const selectPostbookMark = createSelector(
  [selectPost],
  (selectBookMark) => selectBookMark.bookMark
);

///////////////////////////////////////////////////////////////////////
/////  Select                                                    //////
//////////////////////////////////////////////////////////////////////

export const selectPostData = memoize(({ value }) =>
  createSelector([selectPost], (selectPosts) => {
    const posts = selectPosts?.postData;
    if (value === "favorite") {
      const bookMarks = store.getState().post.bookMark;
      const postToIdMap = posts.reduce((acc, post) => {
        acc[post._id] = post;
        return acc;
      }, {});
      const bookMarkPost = bookMarks.map((id) => postToIdMap[id]);
      const updateMap = Object.keys(bookMarkPost);
      const sort = mergeSort(updateMap);
      return sort?.map((time) => bookMarkPost[time]);
    }

    if (!isNaN(+value)) {
      const transferPostToUpdateTimeMap = posts.reduce((acc, post) => {
        if (+post._updatedAt.split("-")[0] === +value) {
          const updateTime = Date.parse(post._updatedAt);
          acc[updateTime] = post;
        }
        return acc;
      }, []);
      const updateMap = Object.keys(transferPostToUpdateTimeMap);
      const sort = mergeSort(updateMap);
      return sort?.map((time) => transferPostToUpdateTimeMap[time]);
    }
  })
);

///////////////////////////////////////////////////////////////////////
/////  Post                                                      //////
//////////////////////////////////////////////////////////////////////

export const selectUnfoldPostData = createSelector(
  [selectPost],
  (selectPosts) => {
    return selectPosts?.postData.reduce((acc, post) => {
      const slug = post.slug.current;
      acc[slug] = post;
      return acc;
    }, {});
  }
);

///////////////////////////////////////////////////////////////////////
/////  allPostYear                                               //////
//////////////////////////////////////////////////////////////////////
export const selectPostYear = createSelector([selectPost], (selectPosts) => [
  ...new Set(
    selectPosts?.postData.map((post) => post._updatedAt.split("-")[0])
  ),
]);
