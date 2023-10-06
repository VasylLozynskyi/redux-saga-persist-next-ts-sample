import {
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  call,
} from "@redux-saga/core/effects";
import { GET_STATE_ALBUMS, GET_STATE_POSTS } from "../constants";
import { getAlbums, getPosts } from "@/pages/api/api";
import { setPostsAction } from "../actions/postsActions";
import { IDataAlbumResult, IDataPostResult } from "@/types/types";
import { setAlbumsAction } from "../actions/alobumsActions";

export function* SetPostsStoreSaga() {
  const hits: [IDataPostResult] = yield call(getPosts);
  yield put(setPostsAction(hits));
}

export function* SetAlbumsStoreSaga() {
  const hits: [IDataAlbumResult] = yield call(getAlbums);
  yield put(setAlbumsAction(hits));
}


export function* watchSaga() {
  yield takeLeading(GET_STATE_POSTS, SetPostsStoreSaga);
  yield takeLeading(GET_STATE_ALBUMS, SetAlbumsStoreSaga);
}

export default function* rootSaga() {
yield watchSaga();

}
