import React from 'react'
import styled from 'react-emotion'

const Button = styled.button`
  text-decoration: none;
  border-bottom: 4px solid white;
  ${tw`bg-black text-white px-3 py-2 m-auto text-center`};
`

class CTAButton extends React.Component {
  render() {
    const { href, text } = this.props
    return <Button>{text}</Button>
  }
}

export default CTAButton
