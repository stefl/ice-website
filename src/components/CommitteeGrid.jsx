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
  ${tw`text-center w-full px-4 px-8`}        
`

const CardContainer = styled.div`
  //position: absolute;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  grid-gap: 2rem;
  margin: auto;
  ${tw`max-w-xl`};
`

const CommitteeCard = styled.div`
  width: 100%;
`

class CommitteeGrid extends Component {
  render() {
    const { committee } = this.props;
    if(!committee) {
      return (
        <div />
      )
    } else {
      return (
        <OverflowGrid committee={committee}>
          <CardContainer committee={committee}>
            {committee.edges.map( member => {
              return (<CommitteeCard key={member.node.id}>
                <Rounded>
                  <ScaledUp>
                    <Img fadeIn={true} fluid={member.node.data.photo.localFile.childImageSharp.fluid} />
                  </ScaledUp>
                </Rounded>
                <p style={{paddingTop: '1rem'}}>
                  <a href={member.node.data.link.url}>
                    <strong>{member.node.data.name.text}</strong>
                  </a>
                  <br />
                  {member.node.data.role}
                  <br />                  
                  {member.node.data.link_text.text}                  
                </p>
              </CommitteeCard>)
            })}
          </CardContainer>
        </OverflowGrid>
      )
    }
  }
}

export default CommitteeGrid
