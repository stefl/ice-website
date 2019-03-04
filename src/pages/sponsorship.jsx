import React, { Component } from 'react'
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
  PaddedCol
} from 'components'
import Cocktail from '../../svgs/icons/mint/Cocktail.svg'
import Lightbulb from '../../svgs/icons/mint/Lightbulb.svg'
import Megaphone from '../../svgs/icons/mint/Megaphone.svg'
import Mail from '../../svgs/icons/black/Mail.svg'
import Document from '../../svgs/icons/black/Document.svg'
import CommitteeGrid from '../components/CommitteeGrid'
import SponsorGrid from '../components/SponsorGrid'
import MemberLogos from '../../static/members.jpg'
import CTA from '../components/CTA'
import RequestSponsorshipPack from '../components/RequestSponsorshipPack'

class Sponsorship extends Component {
  render() {
    const {
      data: { committee, sponsors, sponsorship, social, posts, projects }
    } = this.props
    return (
      <Layout color="mint">
        <Hero
          color="mint"
          images={sponsorship.data.background.localFile.childImageSharp.fluid}
        >
          <Heading
            size={1}
            color="white"
            bg="black"
            text="Pump up the volume"
          />
          <Heading
            size={4}
            color="black"
            bg="white"
            text="Accept nothing less, sponsor ICE."
          />
        </Hero>

        <Section flexible>
          <Thirds>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon>
                  <Cocktail style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>VIP experience</SimpleHeader>
                <Heading
                  size={4}
                  color="black"
                  bg="white"
                  text="Gold-standard experience across our trips abroad and in the UK."
                />
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon>
                  <Lightbulb style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>Excellence on tap</SimpleHeader>
                <Heading
                  size={4}
                  color="black"
                  bg="white"
                  text="Direct contact with the greatest entrepreneurs and founders in the tech space."
                />
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon>
                  <Megaphone style={{ width: '100%' }} />
                </StandardIcon>
                <SimpleHeader>Brand exposure</SimpleHeader>
                <Heading
                  size={4}
                  color="black"
                  bg="white"
                  text="Your company championed, doing great stuff for UK innovation at large."
                />
              </PaddedCol>
            </ThirdCol>
          </Thirds>
        </Section>

        <Section color="black" bg="mint">
          <Heading size={2} color="white" bg="black" text="VIP Experience" />
          <Heading
            size={1}
            color="black"
            bg="white"
            text="We are your golden ticket"
          />
          <Narrow>
            <p>
              As a sponsor, you and a guest will automatically be VIPs on our
              legendary annual trips, as well as getting priority for our
              mini-breaks, sparkling events, dinners and parties.
            </p>
          </Narrow>
        </Section>

        <Section bg="black" color="white">
          <Heading size={2} color="white" bg="mint" text="Excellence on tap" />
          <Heading
            size={1}
            color="black"
            bg="white"
            text="Surround yourself with future leaders"
          />
          <Narrow>
            <p>
              Our members are changing the face of tech, and they’re here to
              talk about how they do it. Connect with the innovators, creators
              and disruptors who are making and breaking the rules.{' '}
            </p>
          </Narrow>
        </Section>

        <Section bg="white" color="black">
          <Heading size={2} color="white" bg="black" text="Brand exposure" />
          <Heading
            size={1}
            color="white"
            bg="mint"
            text="Your ideas, front and centre"
          />

          <Narrow>
            <p>
              We give our sponsors the opportunity to target their services and
              products to our elite members, meaning influencers and industry
              leaders will know what you’re doing, and why they need to get
              involved.
            </p>
          </Narrow>
        </Section>

        <Section bg="mint" color="black">
          <Heading size={2} color="black" bg="white" text="Get involved" />

          <Heading
            size={1}
            color="white"
            bg="black"
            text="Find out about our sponsorship packages"
          />

          <Narrow>
            <StandardIcon>
              <a
                aria-label="Download sponsorship pack"
                download
                href={sponsorship.data.sponsorship_pack.url}
              >
                <Document style={{ width: '100%' }} />
              </a>
            </StandardIcon>

            <RequestSponsorshipPack url={sponsorship.data.sponsorship_pack.url} />
          </Narrow>
        </Section>

        <Section bg="white" color="black">
          <Heading size={2} color="white" bg="black" text="Our members" />

          <Narrow>
            <p>
              We don’t like to boast about our existing members. But we do it
              anyway.
            </p>
          </Narrow>

          <img src={MemberLogos} alt="Logos of our members" />
        </Section>

        <Section bg="mint" color="black" flexible>
          <Heading size={2} color="white" bg="black" text="Our sponsors" />

          <Narrow>
            <p>And speaking of sponsors, you’ll be in good company.</p>
          </Narrow>

          <SponsorGrid sponsors={sponsors} />
        </Section>

        <Section bg="black" color="white" flexible>
          <Heading
            size={2}
            color="mint"
            bg="white"
            text="An idea this good must run itself…"
          />

          <Narrow>
            <p>
              It absolutely doesn’t. ICE is run by an amazing group who give up
              their time and talent because they believe in what we’re doing
              here. And they do it for free. The beautiful maniacs.
            </p>
          </Narrow>

          <CommitteeGrid committee={committee} />
        </Section>

        <Section bg="mint" color="black">
          <Heading size={2} color="black" bg="white" text="Get involved" />

          <Heading
            size={1}
            color="white"
            bg="black"
            text="Find out about our sponsorship packages"
          />

          <Narrow>
            <StandardIcon>
              <a
                aria-label="Download sponsorship pack"
                download
                href={sponsorship.data.sponsorship_pack.url}
              >
                <Document style={{ width: '100%' }} />
              </a>
            </StandardIcon>

            <RequestSponsorshipPack url={sponsorship.data.sponsorship_pack.url} />
          </Narrow>
        </Section>
      </Layout>
    )
  }
}

export default Sponsorship

export const pageQuery = graphql`
  query SponsorshipQuery {
    committee: allPrismicCommitteeMember {
      edges {
        node {
          id
          data {
            photo {
              url
              localFile {
                childImageSharp {
                  fluid(
                    srcSetBreakpoints: [100, 200, 300, 400, 500, 600]
                    quality: 80
                    grayscale: true
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
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

    sponsors: allPrismicSponsor {
      edges {
        node {
          uid
          id
          data {
            sponsorlogo {
              url
              localFile {
                childImageSharp {
                  fluid(
                    srcSetBreakpoints: [100, 200, 300, 400, 500, 600]
                    quality: 80
                    grayscale: true
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
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
          }
        }
      }
    }

    sponsorship: prismicSponsorship {
      data {
        sponsorship_pack {
          url
        }
        title {
          text
        }
        subtitle {
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
  }
`
