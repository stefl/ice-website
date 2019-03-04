import React from 'react'
import styled from "@emotion/styled"

const Button = styled.a`
  text-decoration: none;
  border-bottom: 4px solid white;
  ${tw`bg-black text-white px-3 py-2 m-auto text-center`};
`

class CTA extends React.Component {
  render() {
    const { href, text } = this.props
    return <Button href={href}>{text}</Button>
  }
}

export default CTA
