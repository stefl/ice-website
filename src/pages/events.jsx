import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import { Hero, Layout, Listing, Wrapper, Title, Heading, Section, Narrow } from 'components';

class Events extends Component {
  render() {
    const {
      data: { homepage, social, posts, projects },
    } = this.props;
    return (
      <Layout color='black'>
        <Hero color='black'>
          <Heading size={1} color='black' bg='white' text='Grab your diary' />
          <Narrow>
            <Heading size={3} color='white' bg='sky' text='Upcoming ICE events for your moleskin. That’s right, we know you.' />
          </Narrow>       
        </Hero>
        
      </Layout>
    );
  }
}

export default Events

export const pageQuery = graphql`
  query EventsQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`;
