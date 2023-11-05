import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counter'
import { pokemonApi } from '../services/pokemon'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/root_saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //[pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware),
})

//sagaMiddleware.run(watcherSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch