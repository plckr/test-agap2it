import React from 'react'
import { Link } from 'react-router-dom'

export const Episode: React.FC = () => {
  const episode = {
    id: 1662009,
    url: 'https://www.tvmaze.com/episodes/1662009/the-powerpuff-girls-3x38-the-oct-father',
    name: 'The Oct-father',
    season: 3,
    number: 38,
    type: 'regular',
    airdate: '2019-06-16',
    airtime: '17:30',
    airstamp: '2019-06-16T21:30:00+00:00',
    runtime: 15,
    rating: {
      average: null,
    },
    image: null,
    summary: "<p>When Princess Morbucks steals Octi, Bubbles' reaction surprises everyone, even her sisters.</p>",
    _links: {
      self: {
        href: 'https://api.tvmaze.com/episodes/1662009',
      },
    },
  }

  return (
    <div id='main'>
      <section id='top'>
        <div className='cover'>
          <img src={episode.image || 'https://static.tvmaze.com/uploads/images/medium_portrait/11/27896.jpg'} alt='Cover' />
        </div>
        <div className='description'>
          <span>
            <Link to='/'>Go back</Link>
          </span>
          <h1>The powerpuff Girls</h1>
          <h2>Season 1 - Episode 3: {episode.name}</h2>
          <div>{episode.summary.replace(/<[/]?p>/g, '')}</div>
        </div>
      </section>
    </div>
  )
}
