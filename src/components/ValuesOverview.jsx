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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`

const OverviewContainer = styled.div`
  ${tw`w-full mx-2`};
`

class ValuesOverview extends Component {
  render() {
    const values = [
      {
        icon: Globe,
        title: 'Growth',
        description: 'Bi-annual international adventure. Skiiing. Sunbathing. Workshops. Good times.',
      },
      {
        icon: Mountain,
        title: 'Friendship',
        description: 'UK based adventures to learn, celebrate, discuss, relax and have some serious fun.',
      },
      {
        icon: Location,
        title: 'Respect',
        description: 'Heading out on the road to MWC or WebSummit.',
      },
      {
        icon: Contribution,
        title: 'ICE parties',
        description: 'Summer parties, Christmas balls and more',
      },
      {
        icon: Cutlery,
        title: 'Overfunning',
        description:
          'These special ICE dinners will bring together a more intimate group of ICERs to connect in a meaningful way.',
      },
    ]
    return (
      <OverviewContainer>
        <OverviewGrid>
          {values.map(item => {
            const ValueIcon = item.icon
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

export default ValuesOverview