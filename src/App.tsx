import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Episode, Home } from './routes'
import './App.scss'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchEpisodes } from './features/episodesSlice'
import { fetchTvshow } from './features/tvshowSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTvshow())
    dispatch(fetchEpisodes())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':seasonId/:episodeId' element={<Episode />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
