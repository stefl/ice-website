import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Hero,
  Layout,
  Listing,
  Wrapper,
  Title,
  Heading,
  Section,
  Narrow,
  Page,
  StandardIcon
} from 'components'
import dateFormat from 'dateformat'

const SkySpan = styled.span`
  ${tw`text-sky`};
`

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: 2rem;
  width: 100%;
  border-top: 1px solid;
  ${tw`border-black pt-4`};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const RoundedDiamond = styled.div`
  border-radius: 24px;
  transform: rotate(-45deg) scale(0.533);
  overflow: hidden;
  width: 320px;
  height: 320px;
`

const RoundedImg = styled(Img)`
  transform: rotate(45deg) scale(1.406);
`

const DiamondHolder = styled.div`
  transform: translate(32px, -32px);
  overflow: hidden;
`

const EventIcon = styled.div`
  ${tw`w-24 m-auto`};
`

import Cocktail from '../../svgs/icons/black/Cocktail.svg'
import Global from '../../svgs/icons/black/Global.svg'
import Cutlery from '../../svgs/icons/black/Cutlery.svg'
import Location from '../../svgs/icons/black/Location.svg'

class Event extends Component {
  render() {
    const { event } = this.props
    let Icon
    switch (event.node.data.event_type) {
      case 'Annual trip':
        Icon = Global
        break
      case 'Mini-trip':
        Icon = Bus
        break
      case 'Local event':
        Icon = Global
        break
      case 'ICE feast':
        Icon = Cutlery
        break
      case 'ICE party':
        Icon = Cocktail
        break
    }
    return (
      <EventGrid>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
            <EventIcon>
              <Icon />
            </EventIcon>
          </div>
          <DiamondHolder>
            <RoundedDiamond>
              <RoundedImg
                resolutions={
                  event.node.data.image.localFile.childImageSharp.resolutions
                }
              />
            </RoundedDiamond>
          </DiamondHolder>
        </div>
        <div>
          <h2>{event.node.data.title.text}</h2>
          <h3>
            <SkySpan>
              {dateFormat(event.node.data.date_from, 'd mmm ‘yy')}
            </SkySpan>
            {event.node.data.date_to &&
              event.node.data.date_to !== event.node.data.date_from && (
                <SkySpan>
                  {' '}
                  – {dateFormat(event.node.data.date_to, 'd mmm ‘yy')}
                </SkySpan>
              )}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: event.node.data.description.html
            }}
          />
        </div>
      </EventGrid>
    )
  }
}

class Events extends Component {
  render() {
    const {
      data: { page, events }
    } = this.props
    return (
      <Layout color="black">
        <Hero color="black">
          <Heading size={1} color="black" bg="white" text="Grab your diary" />
          <Narrow>
            <Heading
              size={3}
              color="white"
              bg="sky"
              text="Upcoming ICE events for your moleskin. That’s right, we know you."
            />
          </Narrow>
        </Hero>
        <Section flexible bg="white" color="black">
          <Page>
            {events.edges.map(event => {
              return <Event event={event} />
            })}
          </Page>
        </Section>
      </Layout>
    )
  }
}

export default Events

export const pageQuery = graphql`
  query EventsQuery {
    page: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }

    events: allPrismicEvent(sort: { order: ASC, fields: [data___date_from] }) {
      edges {
        node {
          data {
            title {
              text
            }
            description {
              html
            }
            event_type
            date_from
            date_to
            image {
              url
              localFile {
                childImageSharp {
                  resolutions(width: 320, height: 320) {
                    ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
