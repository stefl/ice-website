import React from 'react'
import { animated, useTrail, useTransition } from 'react-spring' // Trail, Transition
import styled from "@emotion/styled"

const trailConfig = { mass: 5, tension: 2000, friction: 200 }

const FullScreenMenu = styled.ul`
  position: fixed;
  zindex: 500;
  top: 0px;
  left: '0px';
  width: 100vw;
  height: 100vh;
  display: ${props => (props.hidden ? 'none' : 'grid')};
  grid-auto-rows: 1fr;
  padding: 0;
  margin: 0;
`

function Menu(props){
  const { hidden, items, to, open, color } = props
  const trail = useTrail(items.length + 1, {
    config: trailConfig,
    opacity: open ? 1 : 0,
    backgroundColor: color,
    textAlign: 'center',
    marginBottom: '0px',
  })
  return (
    <FullScreenMenu to={to} hidden={hidden} aria-label="Main navigation">
      {trail.map((props, index) => (
         <animated.li key={index} style={props}>{items[index] ? items[index].element : '' }</animated.li>
      ))}
    </FullScreenMenu>
  )
}

export default Menu