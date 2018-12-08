import React from 'react'
import ReactPlayer from 'react-player'
import Dimensions from 'react-dimensions'


class FullWidthPlayer extends React.PureComponent {

  render() {
    const {containerWidth, containerHeight} = this.props
    return(
      <ReactPlayer url={this.props.url} width={`${containerWidth}px`} height={`${Math.ceil(0.423 * containerWidth)}px` } />
    )
  }
}

export default Dimensions()(FullWidthPlayer)