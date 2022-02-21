import { configureStore } from '@reduxjs/toolkit'
import episodesReducer from '../features/episodesSlice'
import tvshowReducer from '../features/tvshowSlice'

export const store = configureStore({
  reducer: {
    tvshow: tvshowReducer,
    episodes: episodesReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
