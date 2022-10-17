import React from 'react'

import Template from 'components/Template'

export default function Betablocks() {
  const content = {
    project: {
      title: 'The project',
      content:
        'Betablocks is an American company that allow people to create their own marketplace to sell their digital assets, including NFTs, using cryptocurrencies to buy and sell these digital items. They hired Softwrap to create their entire system, from landing page to the web platform. The project took about six months to be completed.'
    },
    role: {
      title: 'My Role',
      content:
        'Betablocks was my first experience working with international clients, all documentation and reports and decisions we made as a team were reviewed and approved by them. I joined the project along with other two frontend developers and we were responsible for building the platform starting “from the outside” (meaning landing page and non-logged areas) then deepen into the actual platform. At first, I built the landing page myself, then built many components that I later used to build the NFT listing page, value listing and checkout pages.'
    },
    Tech: {
      title: 'Tech Stack',
      content: 'Next js, Typescript, tailwindcss'
    },
    Link: {
      title: 'Links',
      content: '🔗 The project',
      link: 'https://www.betablocks.com/'
    }
  }

  return <Template content={content} image="/img/beta.png" />
}
