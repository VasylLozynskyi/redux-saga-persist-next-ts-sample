import { SET_STATE_POSTS, SET_STATE_ALBUMS, GET_POST_BY_ID } from "@/redux/constants";

export interface IDataPostResult {
  userId: number,
  id: number,
  title: string,
  body: string
}
export interface IDataAlbumResult {
  userId: number,
  id: number,
  title: string,
}

// Actions
interface ISetPostsAction {
  type: typeof SET_STATE_POSTS,
  payload: {
    data: [IDataPostResult],
  }
}
interface IGetPostAction {
  type: typeof GET_POST_BY_ID,
  payload: {
    id: string,
  }
}
interface ISetAlbumsAction {
  type: typeof SET_STATE_ALBUMS,
  payload: {
    data: [IDataAlbumResult]
  },
}


export type TPostsActionTypes = ISetPostsAction | IGetPostAction;
export type TAlbumsActionTypes = ISetAlbumsAction


