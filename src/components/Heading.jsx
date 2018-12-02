import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import {theme} from '../styles'

const HeadingContainer = styled.div`
  ${tw`my-4`}
  position: relative;
`

const StyledH1 = styled.h1`
  ${tw`mx-2 text-center`}
  max-width: 16em;
  position: relative;
`

const StyledH2 = styled.h2`
  ${tw`mx-2 text-center`}
  max-width: 16em;
  position: relative;
`

const StyledH3 = styled.h3`
  ${tw`mx-2 text-center`}
  max-width: 20em;
  position: relative;
`

const StyledP = styled.p`
  ${tw`mx-2 text-center`}
  max-width: 24em;
  position: relative;
`

const StyledHeading1 = styled.span`
  padding: 0.4em;
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
  max-width: 16em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  display: inline !important;
  overflow: visible;
  box-shadow: 0.4em 0 0 ${props => props.theme.colors[props.bg]},-0.4em 0 0 ${props => props.theme.colors[props.bg]};
`

const StyledHeading2 = styled.span`
  padding: 0.4em;
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
  max-width: 16em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  display: inline;
  overflow: visible;
  box-shadow: 0.4em 0 0 ${props => props.theme.colors[props.bg]},-0.4em 0 0 ${props => props.theme.colors[props.bg]};
`

const StyledHeading3 = styled.span`
  padding: 0.4em;
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
  max-width: 20em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  display: inline;
  overflow: visible;
  box-shadow: 0.4em 0 0 ${props => props.theme.colors[props.bg]},-0.4em 0 0 ${props => props.theme.colors[props.bg]};
`

const StyledHeading4 = styled.span`
  padding: 0.4em;
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
  max-width: 24em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  display: inline;
  overflow: visible;
  box-shadow: 0.4em 0 0 ${props => props.theme.colors[props.bg]},-0.4em 0 0 ${props => props.theme.colors[props.bg]};
`

class Heading extends Component {
  render() {
    const { text, bg, color, size } = this.props;
    let Wrapper;
    let Heading;
    if(size === 1) {
      Wrapper = StyledH1
      Heading = StyledHeading1
    } else if(size === 2) {
      Wrapper = StyledH2
      Heading = StyledHeading2
    } else if(size === 3){
      Wrapper = StyledH3
      Heading = StyledHeading3
    } else {
      Wrapper = StyledP
      Heading = StyledHeading4
    }

    return (
      <HeadingContainer>
        <Wrapper style={{position: 'absolute', top: '0px'}} aria-hidden="true">
          <Heading color='transparent' bg={bg} dangerouslySetInnerHTML={{ __html: text}} />
        </Wrapper>
        <Wrapper style={{position: 'relative'}}>
          <Heading color={color} bg='transparent' dangerouslySetInnerHTML={{ __html: text}} />
        </Wrapper>
      </HeadingContainer>
    )
  }
}

export default Heading;

Heading.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
}

Heading.defaultProps = {
  bg: 'black',
  color: 'white',
  size: 1
}
