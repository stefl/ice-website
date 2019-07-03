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
import Meeting from '../../svgs/icons/sky/Meeting.svg'
import Calendar from '../../svgs/icons/sky/Calendar.svg'
import Talk from '../../svgs/icons/sky/Talk.svg'
import Mail from '../../svgs/icons/black/Mail.svg'
import CommitteeGrid from '../components/CommitteeGrid'
import MemberGrid from '../components/MemberGrid'
import MemberLogos from '../../static/members.jpg'
import CTA from '../components/CTA'
import EventsOverview from '../components/EventsOverview'
import SimpleSection from '../components/LandingPageSections/SimpleSection'

class Membership extends Component {
  render() {
    const {
      data: { membership, committee, members },
    } = this.props
    return (
      <Layout color="sky">
        <Hero color="sky" images={membership.data.background.localFile.childImageSharp.fluid}>
          <Heading size={1} color="white" bg="black" text="ICE is the tech family you’ve waited for" />

          <Narrow>
            <Heading
              size={4}
              color="white"
              bg="sky"
              text="Forging strong bonds, supporting through the good and bad, changing the tech world for the better. We’re not here to network, we’re here to find our people."
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

        <SimpleSection 
          bodyColor="black" bodyBackground="sky" 
          subheadingText="ICE List" subheadingColor="white" subheadingBackground="black" 
          headingText="Nice to CC you" headingColor="black" headingBackground="white" 
        >
          <p>
            Forging strong bonds, supporting through the good and bad, making amazing memories. 
            We’re not here to network, we’re here to find our people.
          </p>
        </SimpleSection>

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

        <SimpleSection 
          bodyColor="black" bodyBackground="sky" 
          subheadingText="ICE Cubes" subheadingColor="white" subheadingBackground="black" 
          headingText="We love to think inside the box" headingColor="black" headingBackground="white" 
        >
          <p>
            Our events are the best. But we wanted more. Our ICE Cubes are smaller, carefully curated groups who meet
            regularly - providing deep support, ongoing advice and a proper investment in each-other’s development.
          </p>
          <p>
            It’s hard to overstate the value of having a team of brilliant people who have your back, without any
            pressure. An entrepreneur’s journey can be lonely. We decided to change that.
          </p>
        </SimpleSection>

        {false && <Section bg="sky" color="black">
          <Heading size={2} color="white" bg="black" text="Your talent > Your cash" />
          <Heading size={1} color="black" bg="white" text="We need your brains, not your bank balance" />

          <Narrow>
            <p>ICE is a not-for-profit, and costs nothing to join. However, we don’t let just anyone in.</p>
            <p>
              We keep it exclusive because we want to stay personal, and make sure every member shares our values, spark
              and desire to be better.
            </p>
          </Narrow>
        </Section>}

        <Section bg="white" color="black" flexible>
          <Heading size={2} color="white" bg="black" text="Our members" />

          <Narrow>
            <p>To get a flavour of who is part of ICE, here’s a selection of the company you'd keep as a member.</p>
          </Narrow>

          <MemberGrid />
        </Section>

        <Section bg="black" color="white" flexible>
          <Heading size={2} color="sky" bg="white" text="An idea this good must run itself…" />

          <Narrow>
            <p>
              It absolutely doesn’t. ICE is run by an amazing group who give up their time and talent because they
              believe in what we’re doing here. And they do it for free. The beautiful maniacs.
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
              <a aria-label="Apply to join ICE" href="https://airtable.com/shrOJuDfRpLXz3JoS">
                <Mail style={{ width: '100%' }} />
              </a>
            </StandardIcon>

            <CTA color="black" text="Apply to join ICE" href="https://airtable.com/shrOJuDfRpLXz3JoS" />
          </Narrow>
        </Section>
      </Layout>
    )
  }
}

export default Membership

export const pageQuery = graphql`
  query MembershipQuery {
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

    membership: prismicMembership {
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
