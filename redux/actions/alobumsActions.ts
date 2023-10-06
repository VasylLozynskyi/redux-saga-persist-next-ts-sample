import { IDataAlbumResult, TAlbumsActionTypes } from "@/types/types"
import { GET_STATE_ALBUMS, SET_STATE_ALBUMS} from "../constants"


export const setAlbumsAction = (data: [IDataAlbumResult]): TAlbumsActionTypes => {
  return {
      type: SET_STATE_ALBUMS,
      payload: {
        data
      }
  }
}
export const getAlbumsAction = () => {
  return {
      type: GET_STATE_ALBUMS,
  }
}