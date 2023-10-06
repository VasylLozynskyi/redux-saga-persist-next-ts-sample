import { IDataAlbumResult, TAlbumsActionTypes } from "@/types/types";
import { SET_STATE_ALBUMS } from "../constants";

interface IInitialState {
  allAlbums: []
}

let initialState: IInitialState = {
  allAlbums: [],
};

export interface IStateAlbums {
  allAlbums: [IDataAlbumResult]
}

const albumsReducer = (state = initialState, {type, payload}: TAlbumsActionTypes) => {
  switch (type) {
    case SET_STATE_ALBUMS:    
      return {
        ...state,
        allAlbums: [...payload.data],
      };
    default:
      return state ;
  }
};
export default albumsReducer;
