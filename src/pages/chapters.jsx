import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import {
  Hero,
  Layout,
  Heading,
  Section,
  Narrow,
  Thirds,
  ThirdCol,
  Halves,
  HalfCol,
  StandardIcon,
  Page,
} from 'components'
import Umbrella from '../../svgs/icons/sky/Umbrella.svg'
import Lightning from '../../svgs/icons/mint/Lightning.svg'
import WebVideo from '../../svgs/icons/rose/WebVideo.svg'
import Mail from '../../svgs/icons/black/Mail.svg'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  font-style: normal;
`

class ChaptersPage extends Component {
  render() {
    const {
      data: { chapters },
    } = this.props
    return (
      <Layout color="rose">
        <Hero color="rose">
          <Heading size={1} color="white" bg="black" text="ICE Chapters" />
          <Heading size={3} color="black" bg="white" text="Local groups for ICE members" />
          <Narrow>
            <p>
              ICE started in London, UK and we now have a network of members spanning several continents. Currently we are launching our first regional ICE Chapter in the South West of England, with more regions to follow this year.
            </p>
          </Narrow>
        </Hero>

        <Section color="black" bg="white" flexible>
          <Page>
            <div>
              <a href="/southwest">
                <Heading size={1} color="white" bg="sky" text="ICE South West" />
              </a>
            </div>
          </Page>
        </Section>
      </Layout>
    )
  }
}

export default ChaptersPage

export const pageQuery = graphql`
  query ChaptersPageQuery {
    chapters: allPrismicChapter {
      nodes {
        data {
          title {
            text
          }
          description {
            text
          }
        }
      }
    }
  }
`
