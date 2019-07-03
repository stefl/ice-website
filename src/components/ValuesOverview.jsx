import React, { Component } from 'react'
import styled from "@emotion/styled"
import Direction from '../../svgs/icons/sky/Direction.svg'
import Gift from '../../svgs/icons/sky/Gift.svg'
import Meeting from '../../svgs/icons/sky/Meeting.svg'
import Lightning from '../../svgs/icons/sky/Lightning.svg'
import Fire from '../../svgs/icons/sky/Fire.svg'
import {
  Heading,
  StandardIcon,
  SimpleHeader,
} from 'components'

const OverviewGrid = styled.div`
  ${tw`max-w-xl m-auto text-center`};
  
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 24px;

  @media only screen and (min-width: 480px) {
    display: grid;
  }
`

const OverviewItem = styled.div`
  grid-column: span 2;
  &:nth-last-child(1):nth-child(odd) {
    grid-column: 2 / span 2;
  }
`

const OverviewDescription = styled.p`
  margin-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
`

const OverviewContainer = styled.div`
  ${tw`w-full mx-2`};
`

class ValuesOverview extends Component {
  render() {
    const values = [
      {
        icon: Direction,
        title: 'Growth',
        description: 'We’re all about becoming better - professionally and personally. We help accelerate brilliant business minds by connecting them with like-minded souls.',
      },
      {
        icon: Gift,
        title: 'Friendship',
        description: 'We support each other during the highs and lows of being a founder. We are there for each other with handkerchiefs or champagne. We are an ICE family.',
      },
      {
        icon: Meeting,
        title: 'Respect',
        description: 'No-one is above anyone else. Whether you’re just starting out, or are battle-scarred from years on the front line, we all have experience to share, and something valuable to say.',
      },
      {
        icon: Lightning,
        title: 'Contribution',
        description: 'With ICE, you get out what you put in. We contribute in the knowledge that everyone else is doing the same. We learn from one another constantly, and it’s this amazing energy that helps propel us all forwards.',
      },
      {
        icon: Fire,
        title: 'Overfunning',
        description:
          'The joy of ICE is that it takes place outside our day to day and adds colour to our lives. It’s a reset button, it’s another dimension, it’s like nothing else in our lives. In short, it’s exactly what we need…',
      },
    ]
    return (
      <OverviewContainer>
        <OverviewGrid>
          {values.map(item => {
            const ValueIcon = item.icon
            return (
              <OverviewItem>
                <StandardIcon>
                  <ValueIcon style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>{item.title}</SimpleHeader>
                <OverviewDescription>{item.description}</OverviewDescription>
              </OverviewItem>
            )
          })}
        </OverviewGrid>
      </OverviewContainer>
    )
  }
}

export default ValuesOverview