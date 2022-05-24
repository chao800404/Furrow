/** @format */

export const checkBookMark = (bookmarks, addBookmark) => {
  if (bookmarks.includes(addBookmark)) {
    return bookmarks.filter((bookmark) => bookmark !== addBookmark);
  } else {
    return [...bookmarks, addBookmark];
  }
};
