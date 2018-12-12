import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import HeroContents from './HeroContents'

const StyledHeader = styled.header`
  ${tw`w-full h-screen `};
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
  position: relative;
`

class Hero extends Component {
  render() {
    const { children, color, theme, images } = this.props
    if (!images) {
      return (
        <StyledHeader>
          <HeroContents color={color} images={images}>
            {children}
          </HeroContents>
        </StyledHeader>
      )
    }
    return (
      <StyledHeader>
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <div
            style={{
              position: 'absolute',
              top: '0px',
              width: '100%',
              height: '100vh',
              zIndex: 1,
              overflow: 'hidden',
            }}
          >
            <Img fadeIn backgroundColor="lightgray" fluid={images} style={{ width: '100%', height: '100vh' }} />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '0px',
              width: '100%',
              height: '100vh',
              zIndex: 2,
            }}
          >
            <HeroContents color={color}>{children}</HeroContents>
          </div>
        </div>
      </StyledHeader>
    )
  }
}

export default Hero

Hero.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
}

Hero.defaultProps = {
  bg: 'transparent',
  color: 'black',
}
