import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Img from 'gatsby-image'

const Rounded = styled.div`
  border-radius: 9999px;
  overflow: hidden;
`

const ScaledUp = styled.div`
  transform: scale(1.1);
`

const OverflowGrid = styled.div`
  // position: relative;
  // min-height: 400px;
  // overflow-x: scroll;
  // overflow-y: hidden;
  // width: 100%;
  // -webkit-overflow-scrolling: touch;
  ${tw`px-2 text-center`};
  width: 100%;
`

const CardContainer = styled.div`
  //position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;
  margin: auto;
  ${tw`px-2 max-w-xl`};
`

const SponsorCard = styled.div`
  max-width: 150px;
  height: auto;
  mix-blend-mode: multiply;
`

class SponsorGrid extends Component {
  render() {
    const { sponsors } = this.props
    if (!sponsors) {
      return <div />
    } else {
      return (
        <OverflowGrid sponsors={sponsors}>
          <CardContainer sponsors={sponsors}>
            {sponsors.edges.map(sponsor => {
              return (
                <SponsorCard key={sponsor.node.data.uid}>
                  <a
                    style={{ width: '100%', height: 'auto' }}
                    href={sponsor.node.data.link.url}
                  >
                    <Img
                      style={{ width: '100%', height: 'auto' }}
                      alt={sponsor.node.data.name.text}
                      fadeIn={true}
                      dataPinNopin="true"
                      fluid={
                        sponsor.node.data.sponsorlogo.localFile.childImageSharp
                          .fluid
                      }
                    />
                  </a>
                </SponsorCard>
              )
            })}
          </CardContainer>
        </OverflowGrid>
      )
    }
  }
}

export default SponsorGrid
