import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
import { graphql } from 'gatsby'
import {
  Hero,
  Layout,
  Listing,
  Wrapper,
  Title,
  Heading,
  Section,
  Narrow,
  Thirds,
  ThirdCol,
  StandardIcon,
  SimpleHeader,
  PaddedCol,
} from 'components'
import SimpleSection from 'components/LandingPageSections/SimpleSection'
import Meeting from '../../svgs/icons/sky/Meeting.svg'
import Globe from '../../svgs/icons/white/Globe.svg'
import Mountain from '../../svgs/icons/white/Mountain.svg'
import Location from '../../svgs/icons/white/Location.svg'
import Cocktail from '../../svgs/icons/white/Cocktail.svg'
import Cutlery from '../../svgs/icons/white/Cutlery.svg'
import Calendar from '../../svgs/icons/sky/Calendar.svg'
import Talk from '../../svgs/icons/sky/Talk.svg'
import Mail from '../../svgs/icons/black/Mail.svg'
import CommitteeGrid from '../components/CommitteeGrid'
import EventsListing from '../components/EventsListing'
import MemberLogos from '../../static/members.jpg'
import CTA from '../components/CTA'
import EventsOverview from '../components/EventsOverview'
import ValuesOverview from '../components/ValuesOverview'

class SWEPage extends Component {
  render() {
    const {
      data: { page, committee, events },
    } = this.props
    return (
      <Layout color="sky" title={page.data.title.text} description={page.data.subtitle.text}>
        <Hero color="sky" images={page.data.background.localFile.childImageSharp.fluid}>
          <Heading size={1} color="white" bg="black" text={page.data.title.text} />

          <Narrow>
            <Heading
              size={3}
              color="white"
              bg="sky"
              text={page.data.subtitle.text}
            />
          </Narrow>
        </Hero>

        <Section flexible>
          <Thirds>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon>
                  <Meeting style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>ICE list</SimpleHeader>
                <Heading
                  size={4}
                  color="black"
                  bg="white"
                  text="300+ entrepreneurs, investors and founders at the top of their game, stoked to help each-other with advice, ideas and world-class experience."
                />
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon>
                  <Calendar style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>ICE events</SimpleHeader>
                <Heading
                  size={4}
                  color="black"
                  bg="white"
                  text="Legendary trips abroad, mini-breaks in the UK, dinners, drinks - we throw together the world’s brightest minds and admire the results."
                />
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon>
                  <Talk style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>ICE cubes</SimpleHeader>
                <Heading
                  size={4}
                  color="black"
                  bg="white"
                  text="We curate small (but exquisite) groups looking for long-term support, to turbo-charge personal and professional development."
                />
              </PaddedCol>
            </ThirdCol>
          </Thirds>
        </Section>

        <Section color="black" bg="sky">
          <Heading size={2} color="white" bg="black" text="ICE list" />
          <Heading size={1} color="black" bg="white" text="Nice to CC you" />
          <Narrow>
            <p>
              Forging strong bonds, supporting through the good and bad, making amazing memories. We’re not here to
              network, we’re here to find our people.
            </p>
          </Narrow>
        </Section>

        <Section bg="black" color="white" flexible>
          <Heading size={2} color="white" bg="sky" text="ICE events" />
          <Heading size={1} color="black" bg="white" text="Great minds think <strike>alike</strike> nearby" />
          <Narrow>
            <p>We’re at our best when we’re together. So we make sure that we’re together as much as possible.</p>
            <p>
              Trips abroad to build lasting bonds, mini-breaks to clear our heads, workshops, talks and glorious
              dinners, we build amazing atmospheres and watch the creative sparks fly.
            </p>
          </Narrow>

          <EventsOverview />
        </Section>

        <EventsListing events={events} />


        <Section bg="sky" color="white">
          <Heading size={2} color="white" bg="black" text="ICE cubes" />
          <Heading size={1} color="sky" bg="white" text="We love to think inside the box" />

          <Narrow>
            <p>
              Our events are the best. But we wanted more. Our ICE Cubes are smaller, carefully curated groups who meet
              regularly - providing deep support, ongoing advice and a proper investment in each-other’s development.
            </p>
            <p>
              It’s hard to overstate the value of having a team of brilliant people who have your back, without any
              pressure. An entrepreneur’s journey can be lonely. We decided to change that.
            </p>
          </Narrow>
        </Section>


        {false && <Section bg="black" color="white">
          <Heading size={2} color="white" bg="sky" text="Your talent > Your cash" />
          <Heading size={1} color="black" bg="white" text="We need your brains, not your bank balance" />

          <Narrow>
            <p>ICE is a not-for-profit, and costs nothing to join. However, we don’t let just anyone in.</p>
            <p>
              We keep it exclusive because we want to stay personal, and make sure every member shares our values, spark
              and desire to be better.
            </p>
          </Narrow>
        </Section>}

        <Section bg="black" color="white">
          <Heading size={2} color="white" bg="sky" text="What do we stand for?" />
          <Heading size={1} color="black" bg="white" text="Our values" />

          <Narrow>
            <p>The values are what unites us as a community and hopefully conveys the spirit of ICE that our members know (and love). These values help inform how we work and play together, how we are and how we want to be.</p>
          </Narrow>
        </Section>

        <Section bg="white" color="black" flexible>
          <ValuesOverview />
        </Section>


        <Section bg="white" color="black">
          <Heading size={2} color="white" bg="black" text="Our members" />

          <Narrow>
            <p>To get a flavour of who is part of ICE, here’s a selection of the company you'd keep as a member.</p>
          </Narrow>

          <img src={MemberLogos} />
        </Section>

        <Section bg="black" color="white" flexible>
          <Heading size={2} color="sky" bg="white" text="An idea this good must run itself…" />

          <Narrow>
            <p>
              It absolutely doesn’t. ICE is run by volunteers who give up their time and talent because they
              believe in what we’re doing here.
            </p>
          </Narrow>

          <CommitteeGrid committee={committee} />
        </Section>

        <Section bg="sky" color="black" flexible>
          <Heading size={2} color="white" bg="black" text="Want in? Great." />
          <Heading
            size={1}
            color="black"
            bg="white"
            text="You’re brilliant. We’re brilliant. Let’s make this happen."
          />

          <Narrow>
            {false && <p>
              For us, this business is personal. We’d love to learn more about you, to find out if you’d be a fantastic
              fit for our beloved community.
            </p>}

            <StandardIcon>
              <a aria-label="Apply to join ICE" href="https://airtable.com/shrMQzLOu0nd3VUyC">
                <Mail style={{ width: '100%' }} />
              </a>
            </StandardIcon>

            <CTA color="black" text="Apply to join ICE" href="https://airtable.com/shrMQzLOu0nd3VUyC" />
          </Narrow>
        </Section>
      </Layout>
    )
  }
}

export default SWEPage

export const pageQuery = graphql`
  query SWEPageQuery {
    committee: allPrismicCommitteeMember {
      edges {
        node {
          data {
            photo {
              large {
                url
                localFile {
                  childImageSharp {
                    fluid(srcSetBreakpoints: [100, 200, 300, 400, 500, 600], quality: 80, grayscale: true) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            name {
              text
            }
            link {
              url
            }
            role
            link_text {
              text
            }
          }
        }
      }
    }

    events: allPrismicEvent(filter: {data: {chapters: {document: {elemMatch: {slugs: {eq: "ice-south-west-england"}}}}}}, sort: { order: DESC, fields: [data___date_from] }) {
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

    page: prismicSouthWestEngland {
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
  }
`
