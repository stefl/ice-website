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
import ReactPlayer from 'react-player'
import Umbrella from '../../svgs/icons/sky/Umbrella.svg'
import Lightning from '../../svgs/icons/mint/Lightning.svg'
import WebVideo from '../../svgs/icons/rose/WebVideo.svg'
import Mail from '../../svgs/icons/black/Mail.svg'
import RandomQuote from '../components/RandomQuote'
import FullWidthPlayer from '../components/FullWidthPlayer'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  font-style: normal;
  text-decoration: none;
`

const ButtonLinkSky = styled(Link)`
  text-decoration: none;
  font-size: 150%;
  border-bottom: 4px solid white;
  ${tw`bg-sky text-white px-3 py-2 m-auto text-center`};
  margin-left: 1em;
  margin-right: 1em;
`

const ButtonLinkRose = styled(Link)`
  text-decoration: none;
  font-size: 150%;
  border-bottom: 4px solid white;
  ${tw`bg-rose text-white px-3 py-2 m-auto text-center`};
  margin-left: 1em;
  margin-right: 1em;
`

class Actions extends Component {
  render() {
    return (
      <Section color="black" bg="white" flexible padding="8rem">
        <Heading
          size={2}
          color="white"
          bg="black"
          text="So, what would you like to know about?"
        />

        <div style={{ maxWidth: '40rem', width: '100%', margin: 'auto' }}>
          <Halves>
            <HalfCol>
              <PaddedCol>
                <StyledLink to="/membership">
                  <StandardIcon>
                    <Umbrella style={{ width: '100%' }} />
                  </StandardIcon>
                  <h3 style={{ textDecoration: 'underline' }}>
                    Becoming a member
                  </h3>
                </StyledLink>
              </PaddedCol>
            </HalfCol>
            <HalfCol>
              <PaddedCol>
                <StyledLink to="/sponsorship">
                  <StandardIcon>
                    <Lightning style={{ width: '100%' }} />
                  </StandardIcon>
                  <h3 style={{ textDecoration: 'underline' }}>
                    Becoming a sponsor
                  </h3>
                </StyledLink>
              </PaddedCol>
            </HalfCol>
          </Halves>
        </div>
      </Section>
    )
  }
}

class Index extends Component {
  render() {
    const {
      data: { homepage, quotes }
    } = this.props
    return (
      <Layout color="rose">
        <Hero
          color="rose"
          images={homepage.data.background.localFile.childImageSharp.fluid}
        >
          <Heading
            size={1}
            color="white"
            bg="rose"
            text={homepage.data.title.text}
          />
          <Heading
            size={3}
            color="white"
            bg="transparent"
            text={homepage.data.content.text}
          />
        </Hero>

        <Actions />

        <Section color="white" bg="rose">
          <RandomQuote color="rose" bg="white" quotes={quotes} />
        </Section>

        <Section color="black" bg="black" flexible padding="6rem">
          <Heading
            size={3}
            color="white"
            bg="rose"
            text="Wait, what? There's a video?"
          />

          <div
            style={{
              width: '100%',
              padding: '1rem',
              maxWidth: '60rem',
              margin: 'auto'
            }}
          >
            <FullWidthPlayer url="https://vimeo.com/287290527/5546da4f9a" />
          </div>
        </Section>

        <Actions />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query AltIndexQuery {
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
