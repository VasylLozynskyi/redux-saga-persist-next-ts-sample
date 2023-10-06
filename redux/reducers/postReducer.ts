import { IDataPostResult, TPostsActionTypes } from "@/types/types";
import { GET_POST_BY_ID, SET_STATE_POSTS } from "../constants";

interface IInitialState {
  allPosts: []
  isOpenPost: {}
}

let initialState: IInitialState = {
  allPosts: [],
  isOpenPost: {},
};

export interface IStatePosts {
  allPosts: [IDataPostResult]
  isOpenPost: IDataPostResult
}

const postsReducer = (state = initialState, {type, payload}: TPostsActionTypes) => {
  switch (type) {
    case SET_STATE_POSTS:    
      return {
        ...state,
        allPosts: [...payload.data],
      };
      case GET_POST_BY_ID:
        let post : Array<IDataPostResult> = state.allPosts.filter((el: IDataPostResult) => el.id == +payload.id)
        if   (post.length == 1){
          const result: IDataPostResult = post[0]
          return {
            ...state,
            isOpenPost: Object.assign(result)
          } 
        } else { 
            return {
              ...state,
              isOpenPost: {}
            }
          }
    default:
      return state ;
  }
};
export default postsReducer;
