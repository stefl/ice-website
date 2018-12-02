import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import SectionContents from './SectionContents'

const StyledSection = styled.header`
  ${tw`w-full h-screen `};
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
`

class Section extends Component {
  render() {
    const { children, bg, color } = this.props;
    return (
      <StyledSection bg={bg} color={color}>
        <SectionContents>{children}</SectionContents>
      </StyledSection>
    )
  }
}

export default Section

Section.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string
}

Section.defaultProps = {
  bg: 'transparent',
  color: 'black'
}