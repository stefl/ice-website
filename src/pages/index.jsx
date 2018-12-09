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
  PaddedCol
} from 'components'
import Umbrella from '../../svgs/icons/sky/Umbrella.svg'
import Lightning from '../../svgs/icons/mint/Lightning.svg'
import WebVideo from '../../svgs/icons/rose/WebVideo.svg'
import Mail from '../../svgs/icons/black/Mail.svg'
import ReactPlayer from 'react-player'
import RandomQuote from '../components/RandomQuote'
import FullWidthPlayer from '../components/FullWidthPlayer'
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  font-style: normal;
  text-decoration: none;
`

class Index extends Component {
  render() {
    const {
      data: { homepage, quotes }
    } = this.props
    return (
      <Layout color={'rose'}>
        <Hero
          color={'rose'}
          images={homepage.data.background.localFile.childImageSharp.fluid}
        >
          <Heading
            size={1}
            color="white"
            bg="black"
            text={homepage.data.title.text}
          />
          <Heading
            size={3}
            color="black"
            bg="white"
            text={homepage.data.content.text}
          />
        </Hero>

        <Section color="white" bg="rose">
          <RandomQuote color="rose" bg="white" quotes={quotes} />
        </Section>

        <Section color="black" bg="white">
          <div style={{ maxWidth: '40rem', width: '100%', margin: 'auto' }}>
            <Halves>
              <HalfCol>
                <PaddedCol>
                  <StyledLink to="/membership">
                    <StandardIcon>
                      <Umbrella style={{ width: '100%' }} />
                    </StandardIcon>
                    <h3>Become a member</h3>
                  </StyledLink>
                </PaddedCol>
              </HalfCol>
              <HalfCol>
                <PaddedCol>
                  <StyledLink to="/sponsorship">
                    <StandardIcon>
                      <Lightning style={{ width: '100%' }} />
                    </StandardIcon>
                    <h3>Become a sponsor</h3>
                  </StyledLink>
                </PaddedCol>
              </HalfCol>
            </Halves>
          </div>
        </Section>
        <Section color="black" bg="black" flexible>
          <Heading
            size={2}
            color="white"
            bg="rose"
            text={`Want a quick flavour of what ICE is all about?`}
          />
          <Heading size={3} color="black" bg="white" text="Watch this video" />
          <div style={{ width: '100%', padding: '1rem' }}>
            <FullWidthPlayer url="https://vimeo.com/278903312/5718eefa6a" />
          </div>
        </Section>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
          text
        }
        background {
          localFile {
            childImageSharp {
              fluid(
                srcSetBreakpoints: [600, 800, 1000, 1200, 1400, 1600, 1920]
                quality: 80
                grayscale: true
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    quotes: allPrismicQuote {
      edges {
        node {
          data {
            quote {
              text
            }
            name {
              text
            }
            role {
              text
            }
          }
        }
      }
    }
  }
`
