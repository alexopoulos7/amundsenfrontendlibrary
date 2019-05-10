// TODO - Placeholder type
export interface Bookmark {
  key: string;
}

 // AddBookmark
export enum AddBookmark {
  ACTION = 'amundsen/bookmark/ADD',
  SUCCESS = 'amundsen/bookmark/ADD_SUCCESS',
  FAILURE = 'amundsen/bookmark/ADD_FAILURE',
}
export interface AddBookmarkRequest {
  key: string;
  type: AddBookmark.ACTION,
}
export interface AddBookmarkResponse {
  type: AddBookmark.SUCCESS | AddBookmark.FAILURE;
}


 // RemoveBookmark
export enum RemoveBookmark {
  ACTION = 'amundsen/bookmark/REMOVE',
  SUCCESS = 'amundsen/bookmark/REMOVE_SUCCESS',
  FAILURE = 'amundsen/bookmark/REMOVE_FAILURE',
}
export interface RemoveBookmarkRequest {
  type: RemoveBookmark.ACTION,
  key: string;
}
export interface RemoveBookmarkResponse {
  type: RemoveBookmark.SUCCESS | RemoveBookmark.FAILURE;
}


 // GetBookmarks - Get all bookmarks for the logged in user. This result will be cached
export enum GetBookmarks {
  ACTION = 'amundsen/bookmark/GET',
  SUCCESS = 'amundsen/bookmark/GET_SUCCESS',
  FAILURE = 'amundsen/bookmark/GET_FAILURE',
}
export interface GetBookmarksRequest {
  type: GetBookmarks.ACTION,
}
export interface GetBookmarksResponse {
  type: GetBookmarks.SUCCESS | GetBookmarks.FAILURE;
  payload: Bookmark[];
}


 // GetBookmarksForUser - Get all bookmarks for a specified user
export enum GetBookmarksForUser {
  ACTION = 'amundsen/bookmark/GET_FOR_USER',
  SUCCESS = 'amundsen/bookmark/GET_FOR_USER_SUCCESS',
  FAILURE = 'amundsen/bookmark/GET_FOR_USER_FAILURE',
}
export interface GetBookmarksForUserRequest {
  type: GetBookmarksForUser.ACTION,
  user: string;
}
export interface GetBookmarksForUserResponse {
  type: GetBookmarksForUser.SUCCESS | GetBookmarksForUser.FAILURE;
  payload: Bookmark[];
}