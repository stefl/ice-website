import React from 'react'
import Dimensions from 'react-dimensions'
import memoizeOne from 'memoize-one'
import styled from 'react-emotion'

const FlexContent = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-center`};
`

class SectionContents extends React.PureComponent {
  static getDerivedStateFromProps(props) {    
    return({fixedHeight: props.containerHeight || 'auto'})
  }

  render () {
    const {children, containerWidth, containerHeight} = this.props
    const {fixedHeight} = this.state
    return (
      <div style={{height: fixedHeight + 'px'}}>
        <FlexContent>
          {children}
        </FlexContent>
      </div>)
  }
}
 
export default Dimensions()(SectionContents)
