import React from 'react'
import memoizeOne from 'memoize-one'
import styled from "@emotion/styled"
import { animateScroll } from 'react-scroll'
import Chevron from '../../svgs/chevron.svg'
import { RoundedBox, RoundedIcon, RoundedDiamond } from './Rounded'

const FlexContent = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-center`};
`

class HeroContents extends React.PureComponent {
  state = {}

  scroll = () => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 500,
      delay: 100,
      smooth: 'easeInOutQuad',
    })
  }

  componentDidMount() {
    const fixedHeight = this.divElement.parentElement.clientHeight;
    this.setState({ fixedHeight });
  }

  render() {
    const { children, containerWidth, containerHeight, color } = this.props
    const { fixedHeight } = this.state
    const { scroll } = this
    return (
      <div 
        ref={ (divElement) => this.divElement = divElement}
        style={{ position: 'relative', height: (fixedHeight ? `${fixedHeight}px` : '100%') }}>
        <FlexContent>{children}</FlexContent>
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <RoundedBox onClick={scroll}>
            <RoundedDiamond bg={color} />
            <RoundedIcon>
              <Chevron style={{ width: '100%', height: 'auto', margin: 'auto' }} />
            </RoundedIcon>
          </RoundedBox>
        </div>
      </div>
    )
  }
}

export default HeroContents
