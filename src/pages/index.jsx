import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Link from 'gatsby-link'
import { Hero, 
  Layout, Listing, Wrapper, Title, Heading, Section, Narrow, Thirds,
  ThirdCol,
  StandardIcon,
  SimpleHeader,
  PaddedCol } from 'components'
import Umbrella from '../../svgs/icons/sky/Umbrella.svg'
import Lightning from '../../svgs/icons/mint/Lightning.svg'
import WebVideo from '../../svgs/icons/rose/WebVideo.svg'
import Mail from '../../svgs/icons/black/Mail.svg'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  font-style: normal;
`;

class Index extends Component {
  render() {
    const {
      data: { homepage, social, posts, projects },
    } = this.props;
    return (
      <Layout color={'rose'}>
        <Hero color={'rose'} 
          images={homepage.data.background.localFile.childImageSharp.fluid}
          >
          <Heading size={1} color='white' bg='black' text={homepage.data.title.text} />
          <Heading size={3} color='black' bg='white' text={homepage.data.content.text} />
        </Hero>
        <Section color='black' bg='white'>
          <Thirds>
            <ThirdCol>
              <PaddedCol>
                <StyledLink to='/membership'>
                  <StandardIcon><Umbrella style={{width: '100%'}} /></StandardIcon>
                  <h3>Become a member</h3>
                </StyledLink>
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StyledLink to='/sponsorship'>
                  <StandardIcon><Lightning style={{width: '100%'}} /></StandardIcon>
                  <h3>Become a sponsor</h3>
                </StyledLink>
              </PaddedCol>
            </ThirdCol>
            <ThirdCol>
              <PaddedCol>
                <StyledLink to='/'>
                  <StandardIcon><WebVideo style={{width: '100%'}} /></StandardIcon>
                  <h3>Watch the video</h3>
                </StyledLink>
              </PaddedCol>
            </ThirdCol>
          </Thirds>            
        </Section>
      </Layout>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
          text
        }
        background {
          localFile {
            childImageSharp {
              fluid(srcSetBreakpoints: [ 600, 800, 1000, 1200, 1400, 1600, 1920 ], quality: 80, grayscale: true) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      edges {
        node {
          primary {
            label {
              text
            }
            link {
              url
            }
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProjectsBodyLinkItem {
      edges {
        node {
          primary {
            label {
              text
            }
            link {
              url
            }
          }
        }
      }
    }
  }
`;
