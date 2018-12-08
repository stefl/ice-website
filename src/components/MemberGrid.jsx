import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Img from 'gatsby-image'

const Rounded = styled.div`
  border-radius: 9999px;  
  overflow:hidden;
`

const ScaledUp = styled.div`
  transform: scale(1.1)
`

const OverflowGrid = styled.div`
  // position: relative;
  // min-height: 400px;
  // overflow-x: scroll;
  // overflow-y: hidden;
  // width: 100%;
  // -webkit-overflow-scrolling: touch;  
  ${tw`px-2 text-center`}        
`

const CardContainer = styled.div`
  //position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: auto;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

const MemberCard = styled.div`
  width: 100%;
`

class MemberGrid extends Component {
  render() {
    const { members } = this.props;
    if(!members) {
      return (
        <div />
      )
    } else {
      return (
        <OverflowGrid members={members}>
          <CardContainer members={members}>
            {members.edges.map( member => {
              return (<MemberCard key={member.node.data.uid}>
                    <a style={{width: '100%', height: 'auto'}} href={member.node.data.link.url}>
                      <Img 
                        style={{width: '100%', height: 'auto'}} 
                        alt={member.node.data.name.text}
                        fadeIn={true} 
                        fluid={member.node.data.memberlogo.localFile.childImageSharp.fluid} />
                    </a>
              </MemberCard>)
            })}
          </CardContainer>
        </OverflowGrid>
      )
    }
  }
}

export default MemberGrid
