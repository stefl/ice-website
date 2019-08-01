import React, { Component } from 'react'
import styled from "@emotion/styled"
import Globe from '../../svgs/icons/white/Globe.svg'
import Mountain from '../../svgs/icons/white/Mountain.svg'
import Location from '../../svgs/icons/white/Location.svg'
import Cocktail from '../../svgs/icons/white/Cocktail.svg'
import Cutlery from '../../svgs/icons/white/Cutlery.svg'
import {
  Heading,
  StandardIcon,
  SimpleHeader,
} from 'components'

const OverviewGrid = styled.div`
  ${tw`max-w-xl m-auto text-center`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`

const OverviewContainer = styled.div`
  ${tw`w-full mx-2`};
`

class EventsOverview extends Component {
  render() {
    const events = [
      {
        icon: Globe,
        title: 'Annual trips',
        description: 'Bi-annual international adventure. Skiiing. Sunbathing. Workshops. Good times.',
      },
      {
        icon: Mountain,
        title: 'Mini-trips',
        description: 'UK based adventures to learn, celebrate, discuss, relax and have some serious fun.',
      },
      {
        icon: Location,
        title: 'Local events',
        description: 'Heading out on the road to MWC or WebSummit.',
      },
      {
        icon: Cocktail,
        title: 'ICE parties',
        description: 'Summer parties, Christmas balls and more',
      },
      {
        icon: Cutlery,
        title: 'ICE feasts',
        description:
          'These special ICE dinners will bring together a more intimate group of ICERs to connect in a meaningful way.',
      },
    ]
    return (
      <OverviewContainer>
        <OverviewGrid>
          {events.map(item => {
            const EventIcon = item.icon
            return (
              <div>
                <StandardIcon>
                  <EventIcon style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>{item.title}</SimpleHeader>
                <Heading size={4} color="white" bg="black" text={item.description} />
              </div>
            )
          })}
        </OverviewGrid>
      </OverviewContainer>
    )
  }
}

export default EventsOverview