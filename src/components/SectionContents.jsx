import React from 'react'
import memoizeOne from 'memoize-one'
import styled from "@emotion/styled"

const FlexContent = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-center`};
`

class SectionContents extends React.PureComponent {
  state = {}

  componentDidMount() {
    const fixedHeight = this.divElement.parentElement.clientHeight;
    this.setState({ fixedHeight });
  }

  render() {
    const { children, containerWidth, containerHeight } = this.props
    const { fixedHeight } = this.state
    return (
      <div 
        ref={ (divElement) => this.divElement = divElement}
        style={{ height: (fixedHeight ? `${fixedHeight}px` : '100%') }}>
        <FlexContent>{children}</FlexContent>
      </div>
    )
  }
}

export default SectionContents
