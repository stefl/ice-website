import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
import { Link } from 'gatsby'

import { animated, useTransition } from 'react-spring' // Trail, Transition
import ReactDOM from 'react-dom'
import { theme } from '../styles'
import LogoSVG from '../../svgs/ice-logo.svg'
import Menu from './Menu.jsx'

const Bar = styled.div`
  height: 3px;
  margin: 2px;
  width: 1.5rem;
  ${tw`bg-white`};
`

const BarRow = styled.div`
  ${tw`flex flex-col justify-center items-center`};
`

const StyledNav = styled.nav`
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
  outline: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
    ${props => tw`text-white bg-${() => props.theme.colors[props.bg]}`};
  }
  &:active {
    outline: 0;
    ${props => tw`text-white bg-${() => props.theme.colors[props.bg]}`};
  }
  ${tw`w-8 h-8 bg-black text-white border-none flex flex-col justify-center items-center`};
`


// Reliant on nav_modal being present in Layout.jsx
let navModalRoot

class ModalMenu extends Component {
  constructor(props) {
    super(props)
    if (typeof document !== 'undefined') {
      this.el = document.createElement('div')
    }
  }

  componentDidMount() {
    navModalRoot = document.getElementById('nav_modal')
    navModalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    navModalRoot.removeChild(this.el)
  }

  render() {
    if (typeof document === 'undefined') {
      return <div />
    }
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}


const NavItem = styled(Link)`
  ${tw`block hover:bg-black no-underline text-white h-full w-full text-center flex flex-col justify-center items-center`};
`

class Nav extends Component {
  state = {
    open: false,
    hidden: true,
  }

  toggle = () => {
    console.log('toggle')
    if (this.state.open) {
      this.setClosed()
    } else {
      this.setOpen()
    }
  }

  setOpen = () => {
    this.setState({ hidden: false, open: true })
    if (this.hiddenTimeout) {
      clearTimeout(this.hiddenTimeout)
    }
  }

  setClosed = () => {
    this.setState({ hidden: false, open: false })
    this.hiddenTimeout = setTimeout(() => this.setState({ hidden: true }), 1000)
  }

  render() {
    const { color } = this.props
    const { open, hidden } = this.state

    const menu = [
      { to: '/', label: 'Home' },
      { to: '/membership', label: 'Membership' },
      { to: '/sponsorship', label: 'Sponsorship' },
      { to: '/events', label: 'Events' },
    ]

    const items = menu.map(item => {
      const element = (
        <NavItem style={{ color: 'white', fontStyle: 'normal' }} to={item.to}>
          <h2 style={{ textDecoration: 'none', color: 'white' }}>{item.label}</h2>
        </NavItem>
      )

      return {
        element,
        key: item.to,
      }
    })

    const toggle = this.toggle
    const setOpen = this.setOpen
    const setClosed = this.setClosed

    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            zIndex: 501,
            top: '0px',
            right: '0px',
          }}
        >
          <StyledNav color={color}>
            <StyledNavContent onClick={toggle}>
              <StyledNavButton color={color} onClick={toggle} aria-label="Main menu">
                <Hamburger open={open} />
              </StyledNavButton>
            </StyledNavContent>
          </StyledNav>
        </div>
        <ModalMenu>
          <Menu color={color} open={open} hidden={hidden} items={items} />
        </ModalMenu>
      </div>
    )
  }
}

function Hamburger(props) {

  const transitions = useTransition()
  return (
    <Fragment>
      <BarRow>
        <Bar />
      </BarRow>
      <BarRow>
        <Bar />
      </BarRow>
      <BarRow>
        <Bar />
      </BarRow>
    </Fragment>
  )
}

export default Nav

Nav.propTypes = {
  color: PropTypes.string,
}

Nav.defaultProps = {
  color: 'rose',
}

Nav.defaultState = {
  open: false,
}
