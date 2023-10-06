import { IDataPostResult, TPostsActionTypes } from "@/types/types"
import { GET_POST_BY_ID, GET_STATE_POSTS, SET_STATE_POSTS } from "../constants"


export const setPostsAction = (data: [IDataPostResult]): TPostsActionTypes => {
  return {
      type: SET_STATE_POSTS,
      payload: {
        data
      }
  }
}
export const getPostsAction = () => {
  return {
      type: GET_STATE_POSTS,
  }
}
export const getPostById = (id: string) => {
  return{
    type: GET_POST_BY_ID,
    payload: {
      id
    }
  }
}