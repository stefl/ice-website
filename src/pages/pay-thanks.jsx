import React, { Component } from 'react'
import { Hero, Layout, Heading, Section } from 'components'
import styled from "@emotion/styled"

class PayThanks extends Component {

  render() {
    return (
      <Layout color="mint">
        <Hero color="mint">
          <Heading size={1} color="white" bg="black" text="Thanks!" />
          <Heading size={3} color="black" bg="white" text="You're all set. Check your email for a receipt." />
        </Hero>
      </Layout>
    )
  }
}

export default PayThanks
