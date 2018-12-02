import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import { Hero, 
  Layout, Listing, Wrapper, Title, Heading, Section, Narrow, Thirds,
  ThirdCol,
  StandardIcon,
  SimpleHeader,
  PaddedCol } from 'components'
import Meeting from '../../svgs/icons/sky/Meeting.svg'
import Calendar from '../../svgs/icons/sky/Calendar.svg'
import Talk from '../../svgs/icons/sky/Talk.svg'
import Mail from '../../svgs/icons/black/Mail.svg'

class Membership extends Component {
  render() {
    const {
      data: { membership },
    } = this.props;
    return (
      <Layout color='sky'>
        <Hero color='sky' images={membership.data.background.localFile.childImageSharp.fluid}>
          <Heading size={1} color='white' bg='black' text='ICE is the tech family you’ve waited for' />
          
          <Narrow>
            <Heading size={4} color='white' bg='sky' text='Forging strong bonds, supporting through the good and bad, making amazing memories. We’re not here to network, we’re here to find our people.' />
          </Narrow>
        </Hero>
        
        <Section>
          <Thirds>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon><Meeting style={{width: '100%'}} /></StandardIcon>
                <SimpleHeader>ICE list</SimpleHeader>
                <Heading size={4} color='black' bg='white' text='300+ entrepreneurs, investors and founders at the top of their game, stoked to help each-other with advice, ideas and world-class experience.' />              
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon><Calendar style={{width: '100%'}} /></StandardIcon>
                <SimpleHeader>ICE events</SimpleHeader>
                <Heading size={4} color='black' bg='white' text='Legendary trips abroad, mini-breaks in the UK, dinners, drinks - we throw together the world’s brightest minds and admire the results.' />              
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StandardIcon><Talk style={{width: '100%'}} /></StandardIcon>
                <SimpleHeader>ICE cubes</SimpleHeader>
                <Heading size={4} color='black' bg='white' text='We curate small (but exquisite) groups looking for long-term support, to turbo-charge personal and professional development.' />              
              </PaddedCol>
            </ThirdCol>
          </Thirds>            
        </Section>
        
        <Section color='black' bg='sky'>
          <Heading size={2} color='white' bg='black' text='ICE list' />
          <Heading size={1} color='black' bg='white' text='Nice to CC you' />
          <Narrow>
            <p>Forging strong bonds, supporting through the good and bad, making amazing memories. We’re not here to network, we’re here to find our people.</p>         
          </Narrow>
        </Section>
        
        <Section bg='black' color='white'>
          <Heading size={2} color='white' bg='sky' text='ICE events' />
          <Heading size={1} color='black' bg='white' text='Great minds think <strike>alike</strike> nearby' />
          <Narrow>
            <p>We’re at our best when we’re together. So we make sure that we’re together as much as possible.</p>
            <p>Trips abroad to build lasting bonds, mini-breaks to clear our heads, workshops, talks and glorious dinners, we build amazing atmospheres and watch the creative sparks fly.</p>
          </Narrow>
        </Section>
        
        <Section bg='white' color='black'>
          <Heading size={2} color='white' bg='black' text='ICE cubes' />
          <Heading size={1} color='white' bg='sky' text='We love to think inside the box' />

          <Narrow>
            <p>Our events are the best. But we wanted more. Our ICE Cubes are smaller, carefully curated groups who meet regularly - providing deep support, ongoing advice and a proper investment in each-other’s development.</p>
            <p>It’s hard to overstate the value of having a team of brilliant people who have your back, without any pressure. An entrepreneur’s journey can be lonely. We decided to change that.</p>
          </Narrow>
        </Section>
        
        <Section bg='sky' color='black'>
          <Heading size={2} color='white' bg='black' text='Your talent > Your cash' />
          <Heading size={1} color='black' bg='white' text='We need your brains, not your bank balance' />

          <Narrow>
            <p>ICE is a not-for-profit, and costs nothing to join. However, we don’t let just anyone in.</p>
            <p>We keep it exclusive because we want to stay personal, and make sure every member shares our values, spark and desire to be better.</p>
          </Narrow>
        </Section>

        <Section bg='white' color='black'>
          <Heading size={2} color='white' bg='black' text='Our members' />

          <Narrow>
            <p>We don’t like to boast about our existing members. But we do it anyway.</p>
          </Narrow>
        </Section>

        <Section bg='black' color='white'>
          <Heading size={2} color='sky' bg='white' text='An idea this good must run itself…' />

          <Narrow>
            <p>It absolutely doesn’t. ICE is run by an amazing group who give up their time and talent because they believe in what we’re doing here. And they do it for free. The beautiful maniacs.</p>
          </Narrow>
        </Section>

        <Section bg='sky' color='black'>
          <Heading size={2} color='white' bg='black' text='Want in? Great.' />
          <Heading size={1} color='black' bg='white' text='We just need our gang to sing your praises' />

          <Narrow>
            <p>For us, this business is personal. We’d love you to join us, but to be considered you’ll need two existing members to vouch for your brilliance.</p>
            <p>If you reckon you’ve got the good opinion of two people we already trust, hit apply. We want to know more about you. </p>
            <StandardIcon><Mail style={{width: '100%'}} /></StandardIcon>
          </Narrow>
        </Section>
      </Layout>
    );
  }
}

export default Membership

export const pageQuery = graphql`
  query MembershipQuery {
    membership: prismicMembership {
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

