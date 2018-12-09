import React from 'react'
import Dimensions from 'react-dimensions'
import memoizeOne from 'memoize-one'
import styled from 'react-emotion'
import Chevron from '../../svgs/chevron.svg'
import { animateScroll } from 'react-scroll'
import { RoundedBox, RoundedIcon, RoundedDiamond } from './Rounded'

const FlexContent = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-center`};
`

class HeroContents extends React.PureComponent {
  state = {}

  static getDerivedStateFromProps({ containerHeight }) {
    return { fixedHeight: containerHeight }
  }

  scroll = () => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 500,
      delay: 100,
      smooth: 'easeInOutQuad'
    })
  }

  render() {
    const { children, containerWidth, containerHeight, color } = this.props
    const { fixedHeight } = this.state
    const { scroll } = this
    return (
      <div style={{ position: 'relative', height: fixedHeight + 'px' }}>
        <FlexContent>{children}</FlexContent>
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <RoundedBox onClick={scroll}>
            <RoundedDiamond bg={color} />
            <RoundedIcon>
              <Chevron
                style={{ width: '100%', height: 'auto', margin: 'auto' }}
              />
            </RoundedIcon>
          </RoundedBox>
        </div>
      </div>
    )
  }
}

export default Dimensions()(HeroContents)
