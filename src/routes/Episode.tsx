import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AppInfo } from '../components/AppInfo'
import { episodesSelector, IEpisodeState } from '../features/episodesSlice'
import { tvshowSelector } from '../features/tvshowSlice'

type params = {
  seasonId: string
  episodeId: string
}

export const Episode: React.FC = () => {
  const params = useParams<params>()
  const seasonId = +params.seasonId!
  const episodeId = +params.episodeId!

  const { tvshow, loading: tvshowLoading, error: tvshowError } = useSelector(tvshowSelector)
  const { episodes, loading: episodesLoading, error: episodesError } = useSelector(episodesSelector)

  const loading = episodesLoading || tvshowLoading
  const error = episodesError || tvshowError

  const episode = episodes.filter((ep: IEpisodeState) => ep.season === seasonId).find((ep: IEpisodeState) => ep.number === episodeId)

  if (loading) return <AppInfo message='Loading...' />
  if (error) return <AppInfo message='An error has been occurred, please refresh the page...' />
  if (!episode) return <AppInfo message='Cannot find the episode' showHomeButton={true} />

  return (
    <div id='main'>
      <section id='top'>
        <div className='cover'>
          <img src={episode.image.medium} alt='Episode thumbnail' />
        </div>
        <div className='description'>
          <span>
            <Link to='/'>Go back</Link>
          </span>
          <h1>{tvshow.name}</h1>
          <h2>
            Season {seasonId} - Episode {episodeId}: {episode.name}
          </h2>
          <div>{episode.summary?.replace(/<[/]?\w+>/g, '')}</div>
        </div>
      </section>
    </div>
  )
}
