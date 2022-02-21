import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Episode, Home } from './routes'
import './App.scss'

function App() {
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
