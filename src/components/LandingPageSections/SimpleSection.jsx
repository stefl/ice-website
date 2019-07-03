import React, { Component } from 'react'
import {
  Heading,
  Section,
  Narrow,
} from 'components'

class SimpleSection extends Component {
  render() {
    const { 
      bodyColor, bodyBackground, 
      headingColor, headingBackground, 
      subheadingColor, subheadingBackground,
      headingText, subheadingText, children
    } = this.props

    return(
      <Section color={bodyColor} bg={bodyBackground}>
        <Heading size={2} color={subheadingColor} bg={subheadingBackground} text={subheadingText} />
        <Heading size={1} color={headingColor} bg={headingBackground} text={headingText} />
        <Narrow>
          {children}
        </Narrow>
      </Section>
    )
  }
}

export default SimpleSection