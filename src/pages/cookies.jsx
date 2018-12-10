import React, { Component } from 'react'
import { Hero, Layout, Heading } from 'components'

class Cookies extends Component {
  render() {
    return (
      <Layout color={'mint'}>
        <Hero color={'mint'}>
          <Heading size={1} color="white" bg="black" text="Cookie policy" />
          <Heading
            size={3}
            color="black"
            bg="white"
            text="It's simple. There are no cookies."
          />
        </Hero>
      </Layout>
    )
  }
}

export default Cookies
