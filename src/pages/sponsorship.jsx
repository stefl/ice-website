import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import { Hero, Layout, Listing, Wrapper, Title, Heading, Section, Narrow } from 'components';

class Sponsorship extends Component {
  render() {
    const {
      data: { sponsorship, social, posts, projects },
    } = this.props;
    return (
      <Layout color='iceGreen'>
        <Hero color='iceGreen' images={sponsorship.data.background.localFile.childImageSharp.fluid}>
          <Heading size={1} color='white' bg='black' text='Pump up the volume' />
          <Heading size={4} color='black' bg='white' text='We’re always on the hunt for people who can help run the show. Our beloved sponsors help us to realise our ridiculous plans. In return, we give them great stuff. The system works.' />
        </Hero>
        
        <Section>
          <p>Diagram here. VIP experience
          Gold-standard experience across our trips abroad and in the UK

          Excellence on tap
          Direct contact with the greatest entrepreneurs and founders in the tech space

          Brand exposure
          Your company championed, doing great stuff for UK innovation at large
          </p>

        </Section>

        <Section color='black' bg='iceGreen'>
          <Heading size={2} color='white' bg='black' text='VIP Experience' />
          <Heading size={1} color='black' bg='white' text='We are your golden ticket' />
          <Narrow>
            <p>As a sponsor, you and a guest will automatically be VIPs on our legendary annual trips, as well as getting priority for our mini-breaks, sparkling events, dinners and parties.</p>         
          </Narrow>
        </Section>

        <Section bg='black' color='white'>
          <Heading size={2} color='white' bg='iceGreen' text='Excellence on tap' />
          <Heading size={1} color='black' bg='white' text='Surround yourself with future leaders' />
          <Narrow>
            <p>Our members are changing the face of tech, and they’re here to talk about how they do it. Connect with the innovators, creators and disruptors who are making and breaking the rules. </p>
          </Narrow>
        </Section>
       
        <Section bg='white' color='black'>
          <Heading size={2} color='white' bg='black' text='Brand exposure' />
          <Heading size={1} color='white' bg='iceGreen' text='Your ideas, front and centre' />

          <Narrow>
            <p>We give our sponsors the opportunity  to target their services and products to our elite members, meaning influencers and industry leaders will know what you’re doing, and why they need to get involved.</p>
          </Narrow>
        </Section>
        

        <Section bg='iceGreen' color='black'>
          <Heading size={2} color='black' bg='white' text='Get involved' />

          <Heading size={1} color='white' bg='black' text='Find out about our sponsorship packages' />

          <Narrow>
            <p>Form for PDF download</p>
          </Narrow>
        </Section>

        <Section bg='white' color='black'>
          <Heading size={2} color='white' bg='black' text='Our members' />

          <Narrow>
            <p>We don’t like to boast about our existing members. But we do it anyway.</p>
          </Narrow>
        </Section>

        <Section bg='black' color='white'>
          <Heading size={2} color='iceGreen' bg='white' text='An idea this good must run itself…' />

          <Narrow>
            <p>It absolutely doesn’t. ICE is run by an amazing group who give up their time and talent because they believe in what we’re doing here. And they do it for free. The beautiful maniacs.</p>
          </Narrow>
        </Section>
      </Layout>
    );
  }
}

export default Sponsorship

export const pageQuery = graphql`
  query SponsorshipQuery {
    sponsorship: prismicSponsorship {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        background {
          localFile {
            childImageSharp {
              fluid(srcSetBreakpoints: [ 600, 800, 1000, 1200, 1400, 1600, 1920 ], quality: 80, grayscale: true) {
                src
                srcSet
                srcSetWebp
                base64
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
`;