import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Hero, Layout, Heading } from 'components'

class FourOhFour extends Component {
  render() {
    return (
      <Layout color="rose">
        <Hero color="rose">
          <Heading size={1} color="white" bg="black" text="Sorry - Page not found" />
          <Heading
            size={3}
            color="black"
            bg="white"
            text="Perhaps try checking out our other pages to find what you are looking for"
          />
        </Hero>
      </Layout>
      
    )
  }
}

export default FourOhFour

FourOhFour.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}
