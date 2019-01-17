import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import SectionContents from './SectionContents'

const StyledSection = styled.section`
  ${tw`py-16 w-full `};
  $((props) => props.flexible ? '' : ${tw`lg:py-0`});
  ${props =>
    props.flexible
      ? `padding-top: ${props.padding}; padding-bottom: ${props.padding};`
      : 'height: 100vh;'}
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
`

class Section extends Component {
  render() {
    const { children, bg, color, flexible, padding } = this.props
    return (
      <StyledSection
        padding={padding}
        flexible={flexible}
        bg={bg}
        color={color}
      >
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
  children: PropTypes.object,
  padding: PropTypes.string
}

Section.defaultProps = {
  bg: 'transparent',
  color: 'black',
  flexible: false,
  padding: '64px'
}
