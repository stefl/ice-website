/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import 'typeface-source-sans-pro'
import { Footer, SEO, Logo, Nav, Section } from 'components'
import { theme, reset } from 'styles'
import styled from "@emotion/styled"
import Headroom from 'react-headroom'
import Link from 'gatsby-link'
import { SizesProvider } from 'react-sizes'

const WhiteLink = styled(Link)`
  color: white;
  text-decoration: none;
`

injectGlobal`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.black};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.greyDarker};
    background-color: ${theme.colors.bg};
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.sky};
    transition: all 0.4s ease-in-out;
    font-weight: 700;
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`

const NavModal = styled.div`
  ${tw`absolute w-full`};
  z-index: 500;
`

const sizesProviderConfig = { fallbackWidth: 360, fallbackHeight: 640 }

const PureLayout = ({ children, data, color }) => (
  <ThemeProvider theme={theme}>
    <>
      <SizesProvider config={sizesProviderConfig}> 
        <div style={{ position: 'absolute', width: '100%', zIndex: 50 }}>
          <Headroom>
            <div style={{ position: 'relative' }}>
              <div style={{ float: 'left' }}>
                <Logo color={color} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  width: '100%'
                }}
              >
                <Nav color={theme.colors[color]} />
              </div>
            </div>
          </Headroom>
        </div>
        <SEO />
        {children}
        <Section bg="black" color="white" flexible>
          <h4>
            <WhiteLink to="/terms-conditions">Terms and conditions</WhiteLink>
          </h4>
          <h4>
            <WhiteLink to="/code-of-conduct">Code of conduct</WhiteLink>
          </h4>
          <h4>
            <WhiteLink to="/cookies">Cookie policy</WhiteLink>
          </h4>
        </Section>
        <NavModal id="nav_modal" />
      </SizesProvider>
    </>
  </ThemeProvider>
)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                footer {
                  html
                }
              }
            }
          }
        `}
        render={data => <PureLayout {...this.props} data={data} />}
      />
    )
  }
}

export default Layout

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired
}
