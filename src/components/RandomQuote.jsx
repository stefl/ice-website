import React from 'react'
import { SimpleHeader } from 'components'
import Heading from './Heading'

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

class Quote extends React.Component {
  render() {
    const { color, bg } = this.props
    if (!this.props.quote) {
      return <div />
    }
    const { quote, name, role } = this.props.quote.node.data
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

class RandomQuote extends React.Component {
  state = {
    timeout: null,
    duration: 8000,
    index: 0,
    quotes: []
  }

  nextQuote = () => {
    this.setState({ index: (this.state.index + 1) % this.state.quotes.length })
  }

  componentDidMount() {
    this.setState({ quotes: shuffle(this.props.quotes.edges) })
    this.interval = setInterval(this.nextQuote, this.state.duration)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { color, bg } = this.props
    const { quotes, index } = this.state
    const quote = quotes[index]
    if (typeof window === 'undefined' || !quote) {
      return <div />
    }
    return <Quote quote={quote} color={color} bg={bg} />
  }
}

export default RandomQuote
