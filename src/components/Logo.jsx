import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { theme } from '../styles'
import LogoSVG from '../../svgs/ice-logo.svg'

const StyledLogo = styled.span`
  background-color: ${props => props.theme.colors[props.color]};
  display: block;
  padding: 0;
  ${tw`w-10 sm:w-12 md:w-24 lg:w-32 xl:w-48`};
`

class Logo extends Component {
  render() {
    const { color } = this.props
    return (
      <Link to="/">
        <StyledLogo color={color}>
          <LogoSVG />
        </StyledLogo>
      </Link>
    )
  }
}

export default Logo

Logo.propTypes = {
  color: PropTypes.string,
}

Logo.defaultProps = {
  color: 'rose',
}
