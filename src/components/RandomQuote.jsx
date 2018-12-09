import React from 'react'
import Heading from './Heading'

class RandomQuote extends React.Component {
  render() {
    const { quote, name, role } = this.props.quotes.edges[0].node.data
    console.log(
      'quote',
      { quote, name, role },
      this.props.quotes.edges[0].node.data
    )
    return (
      <div>
        <div style={{ paddingBottom: '1em' }}>
          <Heading size={2} color="black" bg="rose" text={`“${quote.text}”`} />
        </div>
        <Heading
          size={3}
          color="white"
          bg="black"
          text={`${name.text} — ${role.text}`}
        />
      </div>
    )
  }
}

export default RandomQuote
