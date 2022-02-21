import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch, RootState } from '../app/store'

// Types and interfaces
export interface IEpisodeState {
  id: number
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image: {
    medium: string
    original: string
  }
  summary: string | null
  _links: any
}

export type EpisodesState = IEpisodeState[]

interface IInitialState {
  loading: Boolean
  error: Boolean
  episodes: EpisodesState
}

// initial state
const initialState: IInitialState = {
  loading: true,
  error: false,
  episodes: [],
}

// slice
export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setEpisodes: (state, action: PayloadAction<EpisodesState>) => {
      state.loading = false
      state.error = false
      state.episodes = action.payload
    },
    setError: (state) => {
      state.error = true
    },
  },
})

// export actions
export const { setLoading, setEpisodes, setError } = episodesSlice.actions

// export episodes selector
export const episodesSelector = (state: RootState) => state.episodes

// export default reducer
export default episodesSlice.reducer

export const fetchEpisodes = () => {
  return async (dispatch: AppDispatch) => {
    axios
      .get('https://api.tvmaze.com/shows/6771/episodes')
      .then((res) => dispatch(setEpisodes(res.data)))
      .catch(() => dispatch(setError()))
  }
}
