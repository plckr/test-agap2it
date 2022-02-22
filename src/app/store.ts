import { configureStore } from '@reduxjs/toolkit'
import episodesReducer from '../features/episodesSlice'
import tvshowReducer from '../features/tvshowSlice'

// Configure redux store
export const store = configureStore({
  reducer: {
    tvshow: tvshowReducer,
    episodes: episodesReducer,
  },
})

// export state type
export type RootState = ReturnType<typeof store.getState>

// export dispatch type
export type AppDispatch = typeof store.dispatch
