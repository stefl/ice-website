import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import {theme} from '../styles'
import LogoSVG from '../../svgs/ice-logo.svg'
import {animated, Trail, Transition} from 'react-spring'

const Bar = styled.div`
  height: 3px;
  width: 100%;
  ${tw`bg-white`};
`

const BarRow = styled.div`
  width: 100%;
  ${tw`flex flex-col justify-center items-center`};
`


const StyledNav = styled.div`
  display: block;
  ${tw`w-10 sm:w-12 md:w-24 lg:w-32 xl:w-48 h-10 sm:h-12 md:h-24 lg:h-32 xl:h-48`};
`

const StyledNavContent = styled.div`
  height: 100%;
  width: 100%;
  ${tw`flex flex-col justify-center items-center`};
`

const StyledNavButton = styled.button`
  position: relative;
  outline:0;
  &:focus {
    outline:0;
  }
  &:active {
    outline:0;
  }
  ${tw`w-8 h-8 bg-black text-white border-none flex flex-col justify-center items-center`};
`

const NavItem = styled(Link)`
  ${tw`block hover:bg-black no-underline text-white h-full w-full text-center flex flex-col justify-center items-center`};
`

const FullScreenMenu = styled.div`
  position: absolute;
  zIndex: 500;
  top: 0px;
  left: '0px';
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-rows: 1fr;
`

class Nav extends Component {

  state = {
    open: false
  }

  toggle = () => {
    console.log('toggle')
    this.setState({open: !this.state.open})
  }

  render() {
    const { color } = this.props
    const {open} = this.state

    const menu = [
      {to: '/', label: 'Home'},
      {to: '/membership', label: 'Membership'},
      {to: '/sponsorship', label: 'Sponsorship'},
      {to: '/events', label: 'Events'}
    ]

    const items = menu.map((item) => { 
      const element = <NavItem style={{color: 'white', fontStyle: 'normal'}} to={item.to}>
        <h2 style={{textDecoration: 'none', color: 'white'}}>{item.label}</h2>
      </NavItem>

      return({ 
        element: element,
        key: item.to
      })
    })

    const toggle = this.toggle

    const to = {
      opacity: (open ? 1 : 0),
      backgroundColor: color,
      textAlign: 'center'
    }
    return (    
      <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', zIndex: 501, top: '0px', right: '0px'}}>    
          <StyledNav color={color}>
            <StyledNavContent onClick={toggle}>
              <StyledNavButton onClick={toggle}>
                <Transition
                  items={open}
                  from={{ 
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%', 
                    opacity: 0, 
                    textAlign: 'center',
                    display: 'grid',
                    gridAutoRows: '1fr',
                    padding: '6px'
                  }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}>
                  {t =>
                    t
                      ? props => (<div style={props}>
                        <BarRow><Bar /></BarRow>
                      </div>)
                      : props => <div style={props}>
                        <BarRow><Bar /></BarRow>
                        <BarRow><Bar /></BarRow>
                        <BarRow><Bar /></BarRow>
                        </div>
                  }
                </Transition>
</StyledNavButton>
            </StyledNavContent>
          </StyledNav>
        </div>
        <FullScreenMenu>
          <Trail
            native
            items={items} keys={item => item.key}
            to={to}>
            {item => props =>
              <animated.div style={props}>{item.element}</animated.div>
            }
          </Trail>
        </FullScreenMenu>
      </div>
    )
  }
}

export default Nav

Nav.propTypes = {
  color: PropTypes.string,
}

Nav.defaultProps = {
  color: 'icePink',
}

Nav.defaultState = {
  open: false,
}
