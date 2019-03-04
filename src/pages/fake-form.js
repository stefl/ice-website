import React, { Component } from 'react'
import { Layout } from 'components'

class FakeForm extends Component {
  render() {
    return (
      <Layout color='rose'>
        <form name='pack' method='POST' data-netlify='true'>
          
          <p>
            <label>Your Email: <input type='email' name='email' /></label>
          </p>
          
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </Layout>
      
    )
  }
}

export default FakeForm