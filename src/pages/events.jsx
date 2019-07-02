import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
import { graphql } from 'gatsby'
import { Hero, Layout, Listing, Wrapper, Title, Heading, Section, Narrow, Page, StandardIcon } from 'components'
import EventItem from '../components/EventItem'

class Events extends Component {
  state = {
    filter: 'future',
  }

  render() {
    const {
      data: { page, events },
    } = this.props
    const { filter } = this.state
    const yesterday = new Date(Date.now() - 864e5)
    const sortedEvents = events.edges
      .sort((a, b) => {
        if (filter == 'future') {
          return new Date(a.node.data.date_from) - new Date(b.node.data.date_from)
        }
        return new Date(b.node.data.date_from) - new Date(a.node.data.date_from)
      })
      .filter(e => {
        if (filter == 'future') {
          return new Date(e.node.data.date_from) > yesterday
        }
        return new Date(e.node.data.date_from) < yesterday
      })
    console.log({ sortedEvents })
    return (
      <Layout color="black">
        <Hero color="black" images={page.data.background.localFile.childImageSharp.fluid}>
          <Heading size={1} color="black" bg="white" text={page.data.title.text} />
          <Narrow>
            <Heading
              size={3}
              color="white"
              bg="sky"
              text={page.data.subtitle.text}
            />
          </Narrow>
        </Hero>
        <Section flexible bg="white" color="black">
          <Page>
            {sortedEvents.map(event => (
              <EventItem event={event} />
            ))}
          </Page>
        </Section>
      </Layout>
    )
  }
}


export const pageQuery = graphql`
  query EventsQuery {
    page: prismicEvents {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        background {
          localFile {
            childImageSharp {
              fluid(srcSetBreakpoints: [600, 800, 1000, 1200, 1400, 1600, 1920], quality: 80, grayscale: true) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    events: allPrismicEvent(sort: { order: DESC, fields: [data___date_from] }) {
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
            rough_date {
              text
            }
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

export default Events
