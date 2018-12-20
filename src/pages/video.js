import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Section, Hero, Layout, Heading } from 'components'
import FullWidthPlayer from '../components/FullWidthPlayer'

class VideoPage extends Component {
  render() {
    return (
      <Layout color="rose">
        <Section color="black" bg="black" flexible>
          <Heading
            size={2}
            color="white"
            bg="rose"
            text="Want a quick flavour of what ICE is all about?"
          />
          <Heading size={3} color="black" bg="white" text="Watch this video" />
          <div style={{ width: '100%', padding: '1rem' }}>
            <FullWidthPlayer url="https://vimeo.com/287290527/5546da4f9a" />
          </div>
        </Section>
      </Layout>
    )
  }
}

export default VideoPage

VideoPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired
  }).isRequired
}
