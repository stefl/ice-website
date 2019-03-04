import React from 'react'
import ReactPlayer from 'react-player'

class FullWidthPlayer extends React.PureComponent {

  state = {
  }

  componentDidMount() {
    const containerWidth = this.playerElement.parentElement.clientWidth;
    this.setState({ containerWidth });
  }

  render() {
    const { containerWidth } = this.state
    return (
      <div ref={ (playerElement) => this.playerElement = playerElement}>
        <ReactPlayer
          
          url={this.props.url}
          width={`${containerWidth}px`}
          height={`${Math.ceil(0.423 * containerWidth)}px`}
        />
      </div>
    )
  }
}

export default FullWidthPlayer
