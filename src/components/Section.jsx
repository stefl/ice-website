import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import SectionContents from './SectionContents'

const StyledSection = styled.section`
  ${tw`py-16 w-full `};
  $((props) => props.flexible ? '' : ${tw`lg:py-0`});
  ${props =>
    props.flexible
      ? 'padding-top: 64px; padding-bottom: 64px;'
      : 'height: 100vh;'}
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
`

class Section extends Component {
  render() {
    const { children, bg, color, flexible } = this.props
    return (
      <StyledSection flexible={flexible} bg={bg} color={color}>
        <SectionContents>{children}</SectionContents>
      </StyledSection>
    )
  }
}

export default Section

Section.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  flexible: PropTypes.bool,
  children: PropTypes.object
}

Section.defaultProps = {
  bg: 'transparent',
  color: 'black',
  flexible: false
}
