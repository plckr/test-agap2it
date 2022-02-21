import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  const tvshow = {
    title: 'The Powerpuff Girls',
    description:
      'Follow The Powerpuff Girls is an award-winning animated action series about three super-powered little girls Bubbles, Blossom and Buttercup with one very big mission: saving the world before bedtime.',
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/11/27896.jpg',
    episodes: [
      {
        id: 657308,
        url: 'https://www.tvmaze.com/episodes/657308/the-powerpuff-girls-1x01-escape-from-monster-island',
        name: 'Escape from Monster Island',
        season: 1,
        number: 1,
        type: 'regular',
        airdate: '2016-04-04',
        airtime: '18:00',
        airstamp: '2016-04-04T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg',
        },
        summary:
          "<p>Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.</p>",
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/657308',
          },
        },
      },
      {
        id: 657309,
        url: 'https://www.tvmaze.com/episodes/657309/the-powerpuff-girls-1x02-princess-buttercup',
        name: 'Princess Buttercup',
        season: 1,
        number: 2,
        type: 'regular',
        airdate: '2016-04-04',
        airtime: '18:00',
        airstamp: '2016-04-04T22:00:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132618.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132618.jpg',
        },
        summary:
          '<p>Buttercup becomes enamored with a team of roller derby girls called the Derbytantes. When she starts spending all of her time with them, Princess Morbucks seeks to be her replacement in the Powerpuff Girls.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/657309',
          },
        },
      },
      {
        id: 691590,
        url: 'https://www.tvmaze.com/episodes/691590/the-powerpuff-girls-1x03-the-stayover',
        name: 'The Stayover',
        season: 1,
        number: 3,
        type: 'regular',
        airdate: '2016-04-05',
        airtime: '18:00',
        airstamp: '2016-04-05T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132627.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132627.jpg',
        },
        summary: '<p>Blossom and Buttercup suffer a candy hangover, and they must retrace their steps to find where they left Bubbles.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691590',
          },
        },
      },
      {
        id: 691591,
        url: 'https://www.tvmaze.com/episodes/691591/the-powerpuff-girls-1x04-painbow',
        name: 'Painbow',
        season: 1,
        number: 4,
        type: 'regular',
        airdate: '2016-04-06',
        airtime: '18:00',
        airstamp: '2016-04-06T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132628.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132628.jpg',
        },
        summary: '<p>A rainbow causes Townsville to become uncomfortably happy.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691591',
          },
        },
      },
      {
        id: 691592,
        url: 'https://www.tvmaze.com/episodes/691592/the-powerpuff-girls-1x05-horn-sweet-horn',
        name: 'Horn, Sweet Horn',
        season: 1,
        number: 5,
        type: 'regular',
        airdate: '2016-04-07',
        airtime: '18:00',
        airstamp: '2016-04-07T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132629.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132629.jpg',
        },
        summary: '<p>Donny the Pony is transformed into a monster that threatens Townsville.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691592',
          },
        },
      },
      {
        id: 691593,
        url: 'https://www.tvmaze.com/episodes/691593/the-powerpuff-girls-1x06-man-up',
        name: 'Man Up',
        season: 1,
        number: 6,
        type: 'regular',
        airdate: '2016-04-08',
        airtime: '18:00',
        airstamp: '2016-04-08T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132630.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132630.jpg',
        },
        summary:
          '<p>Buttercup adopts a New Age attitude after letting Man-Boy the villain escape in her anger. In order to defeat Man-Boy when he returns to take revenge, Buttercup aims to strike a balance between peace and struggle.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691593',
          },
        },
      },
      {
        id: 691594,
        url: 'https://www.tvmaze.com/episodes/691594/the-powerpuff-girls-1x07-bye-bye-bellum',
        name: 'Bye Bye, Bellum',
        season: 1,
        number: 7,
        type: 'regular',
        airdate: '2016-04-11',
        airtime: '18:00',
        airstamp: '2016-04-11T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132631.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132631.jpg',
        },
        summary: '<p>The Mayor of Townsville overworks the Powerpuff Girls after his secretary Sara Bellum quits</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691594',
          },
        },
      },
      {
        id: 691595,
        url: 'https://www.tvmaze.com/episodes/691595/the-powerpuff-girls-1x08-little-octi-lost',
        name: 'Little Octi Lost',
        season: 1,
        number: 8,
        type: 'regular',
        airdate: '2016-04-12',
        airtime: '18:00',
        airstamp: '2016-04-12T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132632.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132632.jpg',
        },
        summary:
          '<p>Buttercup tries to teach Bubbles a lesson with her stuffed animal Octi, but her plan backfires when Octi is stolen by the villain Pack Rat.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691595',
          },
        },
      },
      {
        id: 691596,
        url: 'https://www.tvmaze.com/episodes/691596/the-powerpuff-girls-1x09-strong-armed',
        name: 'Strong Armed',
        season: 1,
        number: 9,
        type: 'regular',
        airdate: '2016-04-13',
        airtime: '18:00',
        airstamp: '2016-04-13T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132633.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132633.jpg',
        },
        summary: '<p>Bubbles breaks her arm and gets a powerful robotic cast just in time to face the villain Pack Rat.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691596',
          },
        },
      },
      {
        id: 691597,
        url: 'https://www.tvmaze.com/episodes/691597/the-powerpuff-girls-1x10-power-up-puff',
        name: 'Power Up Puff',
        season: 1,
        number: 10,
        type: 'regular',
        airdate: '2016-04-14',
        airtime: '18:00',
        airstamp: '2016-04-14T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132808.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132808.jpg',
        },
        summary:
          '<p>During a fight, both Buttercup and Bubbles are surprised to discover that they have finally leveled up, which leaves Blossom wondering about the full extent of her own abilities.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691597',
          },
        },
      },
      {
        id: 691598,
        url: 'https://www.tvmaze.com/episodes/691598/the-powerpuff-girls-1x11-tiara-trouble',
        name: 'Tiara Trouble',
        season: 1,
        number: 11,
        type: 'regular',
        airdate: '2016-04-15',
        airtime: '18:00',
        airstamp: '2016-04-15T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/133032.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/133032.jpg',
        },
        summary: "<p>A mysterious tiara curses Townsville's pageant of Beauty, Talent, and All-Around Flair.</p>",
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691598',
          },
        },
      },
      {
        id: 691600,
        url: 'https://www.tvmaze.com/episodes/691600/the-powerpuff-girls-1x12-the-wrinklegruff-gals',
        name: 'The Wrinklegruff Gals',
        season: 1,
        number: 12,
        type: 'regular',
        airdate: '2016-04-21',
        airtime: '18:00',
        airstamp: '2016-04-21T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/54/135496.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/54/135496.jpg',
        },
        summary: '<p>A potion to make the Powerpuff Girls older backfires, causing them to become senior citizens.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691600',
          },
        },
      },
      {
        id: 691601,
        url: 'https://www.tvmaze.com/episodes/691601/the-powerpuff-girls-1x13-arachno-romance',
        name: 'Arachno Romance',
        season: 1,
        number: 13,
        type: 'regular',
        airdate: '2016-04-28',
        airtime: '18:00',
        airstamp: '2016-04-28T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/55/138102.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/55/138102.jpg',
        },
        summary: '<p>The Professor has a new girlfriend, and the girls plot and scheme to break up their budding relationship.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691601',
          },
        },
      },
      {
        id: 691602,
        url: 'https://www.tvmaze.com/episodes/691602/the-powerpuff-girls-1x14-puffdoras-box',
        name: "Puffdora's Box",
        season: 1,
        number: 14,
        type: 'regular',
        airdate: '2016-05-05',
        airtime: '18:00',
        airstamp: '2016-05-05T22:00:00+00:00',
        runtime: 11,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/56/140362.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/56/140362.jpg',
        },
        summary:
          '<p>While Spring cleaning the house in the middle of Fall, Blossom accidentally releases of group of party-loving ghosts from a three thousand-year-old, mystical chest.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/691602',
          },
        },
      },
      {
        id: 1076814,
        url: 'https://www.tvmaze.com/episodes/1076814/the-powerpuff-girls-2x01-the-last-donnycorn',
        name: 'The Last Donnycorn',
        season: 2,
        number: 1,
        type: 'regular',
        airdate: '2017-03-03',
        airtime: '18:30',
        airstamp: '2017-03-03T23:30:00+00:00',
        runtime: 30,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/100/251774.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/100/251774.jpg',
        },
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1076814',
          },
        },
      },
      {
        id: 1089606,
        url: 'https://www.tvmaze.com/episodes/1089606/the-powerpuff-girls-2x02-green-wing',
        name: 'Green Wing',
        season: 2,
        number: 2,
        type: 'regular',
        airdate: '2017-03-10',
        airtime: '18:45',
        airstamp: '2017-03-10T23:45:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/101/254228.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/101/254228.jpg',
        },
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1089606',
          },
        },
      },
      {
        id: 1090381,
        url: 'https://www.tvmaze.com/episodes/1090381/the-powerpuff-girls-2x03-15-minutes-of-fame',
        name: '15 Minutes of Fame',
        season: 2,
        number: 3,
        type: 'regular',
        airdate: '2017-03-17',
        airtime: '19:45',
        airstamp: '2017-03-17T23:45:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/103/259454.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/103/259454.jpg',
        },
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1090381',
          },
        },
      },
      {
        id: 1100163,
        url: 'https://www.tvmaze.com/episodes/1100163/the-powerpuff-girls-2x04-splitsville',
        name: 'Splitsville',
        season: 2,
        number: 4,
        type: 'regular',
        airdate: '2017-03-24',
        airtime: '19:45',
        airstamp: '2017-03-24T23:45:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/104/260509.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/104/260509.jpg',
        },
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1100163',
          },
        },
      },
      {
        id: 1104815,
        url: 'https://www.tvmaze.com/episodes/1104815/the-powerpuff-girls-2x05-clawdad',
        name: 'Clawdad',
        season: 2,
        number: 5,
        type: 'regular',
        airdate: '2017-03-31',
        airtime: '19:45',
        airstamp: '2017-03-31T23:45:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/105/263952.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/105/263952.jpg',
        },
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1104815',
          },
        },
      },
      {
        id: 1156710,
        url: 'https://www.tvmaze.com/episodes/1156710/the-powerpuff-girls-2x06-super-sweet-6',
        name: 'Super Sweet 6',
        season: 2,
        number: 6,
        type: 'regular',
        airdate: '2017-04-30',
        airtime: '17:30',
        airstamp: '2017-04-30T21:30:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/112/281092.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/112/281092.jpg',
        },
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1156710',
          },
        },
      },
      {
        id: 1156711,
        url: 'https://www.tvmaze.com/episodes/1156711/the-powerpuff-girls-2x07-a-star-is-blossom',
        name: 'A Star Is Blossom',
        season: 2,
        number: 7,
        type: 'regular',
        airdate: '2017-05-07',
        airtime: '17:30',
        airstamp: '2017-05-07T21:30:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/112/281093.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/112/281093.jpg',
        },
        summary: "<p>When Bubbles gets the lead in the school play, Blossom's jealousy consumes her.</p>",
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1156711',
          },
        },
      },
      {
        id: 1156862,
        url: 'https://www.tvmaze.com/episodes/1156862/the-powerpuff-girls-2x08-mini-golf-madness',
        name: 'Mini Golf Madness',
        season: 2,
        number: 8,
        type: 'regular',
        airdate: '2017-05-21',
        airtime: '17:30',
        airstamp: '2017-05-21T21:30:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/115/288994.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/115/288994.jpg',
        },
        summary: '<p>Buttercup takes her game winning mini-golf ball, in spite of ominous warnings of dire consequences.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1156862',
          },
        },
      },
      {
        id: 1156863,
        url: 'https://www.tvmaze.com/episodes/1156863/the-powerpuff-girls-2x09-summer-bummer',
        name: 'Summer Bummer',
        season: 2,
        number: 9,
        type: 'regular',
        airdate: '2017-05-28',
        airtime: '17:30',
        airstamp: '2017-05-28T21:30:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/115/288993.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/115/288993.jpg',
        },
        summary: '<p>When the beach is taken over by the most excellent Bro Sharks, will the Girls be gnarly enough to save the day?.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1156863',
          },
        },
      },
      {
        id: 1454434,
        url: 'https://www.tvmaze.com/episodes/1454434/the-powerpuff-girls-3x01-not-so-secret-service',
        name: 'Not So Secret Service',
        season: 3,
        number: 1,
        type: 'regular',
        airdate: '2018-05-13',
        airtime: '16:45',
        airstamp: '2018-05-13T20:45:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/156/390583.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/156/390583.jpg',
        },
        summary:
          "<p>After Mojo Jojo's latest creation threatens to blast him into tiny bits, the Powerpuff Girls are forced to take Mojo in.</p>",
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1454434',
          },
        },
      },
      {
        id: 1454435,
        url: 'https://www.tvmaze.com/episodes/1454435/the-powerpuff-girls-3x02-worship',
        name: 'Worship',
        season: 3,
        number: 2,
        type: 'regular',
        airdate: '2018-05-20',
        airtime: '17:30',
        airstamp: '2018-05-20T21:30:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/157/394148.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/157/394148.jpg',
        },
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1454435',
          },
        },
      },
      {
        id: 1471715,
        url: 'https://www.tvmaze.com/episodes/1471715/the-powerpuff-girls-3x03-blossom3',
        name: 'Blossom3',
        season: 3,
        number: 3,
        type: 'regular',
        airdate: '2018-05-20',
        airtime: '17:30',
        airstamp: '2018-05-20T21:30:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: null,
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1471715',
          },
        },
      },
      {
        id: 1471717,
        url: 'https://www.tvmaze.com/episodes/1471717/the-powerpuff-girls-3x04-mojo-the-great',
        name: 'Mojo the Great',
        season: 3,
        number: 4,
        type: 'regular',
        airdate: '2018-05-20',
        airtime: '17:30',
        airstamp: '2018-05-20T21:30:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: null,
        summary: null,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1471717',
          },
        },
      },
      {
        id: 1471709,
        url: 'https://www.tvmaze.com/episodes/1471709/the-powerpuff-girls-3x05-trouble-clef',
        name: 'Trouble Clef',
        season: 3,
        number: 5,
        type: 'regular',
        airdate: '2018-06-03',
        airtime: '16:00',
        airstamp: '2018-06-03T20:00:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: null,
        summary:
          '<p>When Morbucks realizes that The Powerpuff Girls see her as a villain and not a friend, she sets out to turn the town against them.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1471709',
          },
        },
      },
      {
        id: 1471710,
        url: 'https://www.tvmaze.com/episodes/1471710/the-powerpuff-girls-3x06-save-the-date',
        name: 'Save the Date',
        season: 3,
        number: 6,
        type: 'regular',
        airdate: '2018-06-03',
        airtime: '16:15',
        airstamp: '2018-06-03T20:15:00+00:00',
        runtime: 15,
        rating: {
          average: null,
        },
        image: null,
        summary: '<p>Ms. Keane is nervous about a first date.</p>',
        _links: {
          self: {
            href: 'https://api.tvmaze.com/episodes/1471710',
          },
        },
      },
    ],
  }

  const episodesBySeason = tvshow.episodes.reduce((group: any, product) => {
    const { season } = product
    group[season] = group[season] || []
    group[season].push(product)
    return group
  }, {})

  return (
    <div id='main'>
      <section id='top'>
        <div className='cover'>
          <img src='https://static.tvmaze.com/uploads/images/medium_portrait/11/27896.jpg' alt='Cover' />
        </div>
        <div className='description'>
          <h1>{tvshow.title}</h1>
          <div>{tvshow.description}</div>
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
