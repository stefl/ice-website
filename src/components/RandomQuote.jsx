import React from 'react'
import Heading from './Heading'
import { SimpleHeader } from 'components'

class RandomQuote extends React.Component {
  render() {
    const {
      quote,
      name,
      role,
      color,
      bg
    } = this.props.quotes.edges[0].node.data
    console.log(
      'quote',
      { quote, name, role },
      this.props.quotes.edges[0].node.data
    )
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ paddingBottom: '1em' }}>
          <Heading size={2} color={color} bg={bg} text={`“${quote.text}”`} />
        </div>
        <SimpleHeader
          style={{ margin: 'auto' }}
          size={3}
          color={bg}
          bg={color}
        >{`${name.text} — ${role.text}`}</SimpleHeader>
      </div>
    )
  }
}

export default RandomQuote
