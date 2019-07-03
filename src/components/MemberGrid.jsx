import React, { Component } from 'react'
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
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
  width: 100%;
  ${tw`px-2 text-center`};
`

const CardContainer = styled.div`
  //position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin: auto;
  ${tw`max-w-xl`};

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

const MemberCard = styled.div`
  width: 100%;
`

class MemberGridDisplay extends Component {
  render() {
    const { members } = this.props
    if (!members) {
      return <div />
    }
    return (
      <OverflowGrid members={members}>
        <CardContainer members={members}>
          {members.edges.map(member => (
            <MemberCard key={member.node.data.uid}>
              { member.node.data && 
                member.node.data.memberlogo && 
                member.node.data.memberlogo.large.localFile && 
                member.node.data.memberlogo.large.localFile.childImageSharp && 
                  <Img
                    alt={member.node.data.name.text}
                    fadeIn
                    fluid={member.node.data.memberlogo.large.localFile.childImageSharp.fluid}
                  />
              }
            </MemberCard>
          ))}
        </CardContainer>
      </OverflowGrid>
    )
  }
}

const membersQuery = graphql`
  query MemberGridQuery {
    members: allPrismicMember {
      edges {
        node {
          data {
            memberlogo {
              url
              large {
                url
                localFile {
                  url
                  childImageSharp {
                    fluid(srcSetBreakpoints: [100, 200, 300, 400, 500, 600], quality: 80, grayscale: false) {
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
          }
        }
      }
    }
  }
`

class MemberGrid extends Component {
  render() {
    return (
      <StaticQuery query={membersQuery} render={data => (
        <MemberGridDisplay members={data.members} />
      )} />
    )
  }
}

export default MemberGrid
