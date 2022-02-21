import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch, RootState } from '../app/store'

export interface TvshowState {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: any
  officialSite: string
  schedule: any
  rating: any
  weight: number
  network: any
  webChannel: string | null
  externals: any
  image: {
    medium: string
    original: string
  }
  summary: string
  updated: number
  _links: any
}

interface IInitialState {
  loading: Boolean
  error: Boolean
  tvshow: TvshowState | any
}

// initial state
const initialState: IInitialState = {
  loading: true,
  error: false,
  tvshow: {},
}

// slice
export const tvshowSlice = createSlice({
  name: 'tvshow',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setTvshow: (state, action: PayloadAction<TvshowState>) => {
      state.loading = false
      state.error = false
      state.tvshow = action.payload
    },
    setError: (state) => {
      state.error = true
    },
  },
})

// export actions
export const { setLoading, setTvshow, setError } = tvshowSlice.actions

// export tvshow selector
export const tvshowSelector = (state: RootState) => state.tvshow

// export default reducer
export default tvshowSlice.reducer

export const fetchTvshow = () => {
  return async (dispatch: AppDispatch) => {
    axios
      .get('https://api.tvmaze.com/shows/6771')
      .then((res) => dispatch(setTvshow(res.data)))
      .catch(() => dispatch(setError()))
  }
}
