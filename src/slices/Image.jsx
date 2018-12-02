import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import get from 'get-value'

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const Image = ({ input }) => {
  const fluid = get(input, 'primary.image.localFile.childImageSharp.fluid')
  if(!fluid) {
    return <div />
  }
  return ( <Content>
    <Img fluid={fluid} />
  </Content> )
}

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
