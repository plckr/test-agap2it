import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppInfo } from '../components/AppInfo'
import { episodesSelector } from '../features/episodesSlice'
import { tvshowSelector } from '../features/tvshowSlice'

export const Home: React.FC = () => {
  const { tvshow, loading: tvshowLoading, error: tvshowError } = useSelector(tvshowSelector)
  const { episodes, loading: episodesLoading, error: episodesError } = useSelector(episodesSelector)

  const loading = episodesLoading || tvshowLoading
  const error = episodesError || tvshowError

  // group episodes by season
  const episodesBySeason = episodes.reduce((group: any, episode) => {
    const { season } = episode
    group[season] = group[season] || []
    group[season].push(episode)
    return group
  }, {})

  if (loading) return <AppInfo message='Loading...' />
  if (error) return <AppInfo message='An error has been occurred, please refresh the page...' />
  if (!tvshow) return <AppInfo message='Cannot find the show' showHomeButton={true} />

  return (
    <div id='main'>
      <section id='top'>
        <div className='cover'>
          <img src={tvshow.image.medium} alt='TV Show Cover' />
        </div>
        <div className='description'>
          <h1>{tvshow.name}</h1>
          <div>{tvshow.summary.replace(/<[/]?\w+>/g, '')}</div>
        </div>
      </section>
      <section id='episodes'>
        {Object.keys(episodesBySeason).map((season) => (
          <React.Fragment key={season}>
            <h2>Season {season}</h2>
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Runtime</th>
                </tr>
              </thead>
              <tbody>
                {episodesBySeason[season].map((episode: any, idx: number) => (
                  <tr key={idx}>
                    <td>{episode.number}</td>
                    <td>{episode.airdate}</td>
                    <td>
                      <Link to={`/s${season}/ep${episode.number}`}>{episode.name}</Link>
                    </td>
                    <td>{episode.runtime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        ))}
      </section>
    </div>
  )
}
