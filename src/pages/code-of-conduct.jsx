import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
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
  Halves,
  HalfCol,
  StandardIcon,
  SimpleHeader,
  Page,
  PaddedCol,
} from 'components'
import Umbrella from '../../svgs/icons/sky/Umbrella.svg'
import Lightning from '../../svgs/icons/mint/Lightning.svg'
import WebVideo from '../../svgs/icons/rose/WebVideo.svg'
import Mail from '../../svgs/icons/black/Mail.svg'
import ReactPlayer from 'react-player'

import FullWidthPlayer from '../components/FullWidthPlayer'
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  font-style: normal;
`

class Index extends Component {
  render() {
    const {
      data: { coc },
    } = this.props
    return (
      <Layout color={'rose'}>
        <Hero color={'rose'}>
          <Heading
            size={1}
            color="white"
            bg="black"
            text={coc.data.title.text}
          />
          <Heading
            size={3}
            color="black"
            bg="white"
            text={coc.data.subtitle.text}
          />
        </Hero>

        <Section color="black" bg="white" flexible>
          <Page>
            <div>
              <p>
                The ICE Code of Conduct is our guide to doing the right thing
                and explains how our values guide our actions and behaviour.
              </p>
              <p>
                <strong>ICE Values</strong>
              </p>
              <ul>
                <li>We value open and honest communication.</li>
                <li>We behave in ways that earn the trust of others.</li>
                <li>
                  We depend on the relationships we build in ICE and respect
                  each other and those we interact with.
                </li>
                <li>
                  We care about the consequences of our actions and behaviour,
                  on the members of ICE and the people around us.
                </li>
              </ul>
              <p>
                ICE is a by invitation only community of entrepreneurs,
                investors and technology leaders focused on sharing, learning,
                giving back and having fun! We want our trips and other events
                to be the most rewarding experiences for the ICE community.
              </p>
              <p>
                <strong>Honesty and Integrity</strong>
              </p>
              <ul>
                <li>
                  Be open about your business and personal accomplishments.
                </li>
                <li>Share your successes and your failures.</li>
              </ul>
              <p>
                <strong>Courtesy and Respect</strong>
              </p>
              <ul>
                <li>Treat fellow ICErs with respect and courtesy.</li>
                <li>
                  We expect you to participate in an authentic and active way
                  and contribute to the health and longevity of ICE.
                </li>
                <li>
                  We treat the people and communities we interact with and the
                  places we visit with the utmost respect.
                </li>
              </ul>
              <p>
                <strong>No selling or pitching</strong>
              </p>
              <ul>
                <li>
                  Make friends and have fun, don’t sell or pitch to anyone,
                  unless you are asked to do so.
                </li>
                <li>
                  You must not transmit to any other member, or procure the
                  sending of, any unsolicited or unauthorised advertising or
                  promotional material or any other form of similar solicitation
                  (spam).
                </li>
              </ul>
              <p>
                <strong>Inappropriate behaviour </strong>
              </p>
              <ul>
                <li>
                  We do not accept intolerant, offensive or inconsiderate
                  behaviour. For example, you must not make unwanted sexual
                  advances or discriminate against any other person (whether on
                  the grounds of race, religion, age, gender or otherwise).
                </li>
                <li>
                  If you are found to have upset or offended other delegates,
                  you run the risk of being sent home and/or your ICE membership
                  being rescinded.
                </li>
              </ul>
              <p>
                <strong>Confidentiality is Key</strong>
              </p>
              <ul>
                <li>
                  We encourage free and open discussion but ask that you keep
                  any non-public information confidential.
                </li>
                <li>
                  We insist that nothing be quoted in the press or on social
                  media.
                </li>
                <li>
                  We also insist that you don’t post or share photographs or
                  video recordings that might be deemed inappropriatewithout the
                  express consent of those being recorded.
                </li>
                <li>If in any doubt don’t share or talk about it!</li>
              </ul>
              <p>
                <strong>Illegal activities</strong>
              </p>
              <ul>
                <li>
                  ICE has a zero tolerance policy towards breaking any
                  applicable local, national or international law or regulation.
                  Do it and you are out!
                </li>
                <li>You must not:</li>
              </ul>
              <p>
                be threatening, abusive or invade another’s privacy, or cause
                annoyance, inconvenience or needless anxiety;
              </p>
              <p>
                harass, upset, embarrass, alarm or annoy any other person; or
              </p>
              <p>advocate, promote or assist any unlawful act.</p>
              <ul>
                <li>
                  Any damage caused to property will be covered by the
                  individual(s) responsible.
                </li>
              </ul>
              <p>
                <strong>Changes to this Code of Conduct</strong>
              </p>
              <ul>
                <li>
                  We may revise this Code of Conduct at any time by amending
                  this page. You are expected to check this page from time to
                  time to take notice of any changes we make, as they are
                  legally binding on you.
                </li>
              </ul>
            </div>
          </Page>
        </Section>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query CocQuery {
    coc: prismicCodeOfConduct {
      data {
        title {
          text
        }
        subtitle {
          text
        }
      }
    }
  }
`
