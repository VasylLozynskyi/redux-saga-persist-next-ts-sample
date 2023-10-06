import { combineReducers, applyMiddleware, createStore, compose, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./reducers/postReducer";
import rootSaga from "./sagas";
import albumsReducer from "./reducers/albumsReducer";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const reducers = combineReducers({
  posts: postsReducer,
  albums: albumsReducer,
});

// redux-persist storage
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store: Store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
export const persistor = persistStore(store)
//
//only after applyMiddleware use saga
sagaMiddleware.run(rootSaga);
export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch