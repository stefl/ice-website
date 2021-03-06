import React, { Component } from "react";
import { Hero, Layout, Heading, Section } from "components";
import styled from "@emotion/styled";
import Link from 'gatsby-link'

const Button = styled(Link)`
  text-decoration: none;
  border-bottom: 4px solid white;
  margin: 1em;
  display: block;
  max-width: 18rem;
  ${tw`bg-rose text-white px-3 py-2 m-auto mw-50 text-center`};
`;


class SubscribeChoicePage extends Component {
  componentDidMount () {
    const el = document.createElement("script");
    el.onload = () => {
      window.Chargebee.init({
        site: "icepay"
      });
      window.Chargebee.registerAgain();
      // this.setState({ chargebeeReady: true });
    };
    el.setAttribute("src", "https://js.chargebee.com/v2/chargebee.js");
    document.body.appendChild(el);
  }

  render() {
    const {
      data: { payPage }
    } = this.props;
    return (
      <Layout color="mint">
        <Hero
          color="mint"
          images={payPage.data.background.localFile.childImageSharp.fluid}
        >
          <Heading
            size={1}
            color="white"
            bg="black"
            text="Set up your ICE subscription"
          />
          
        </Hero>

        <Section>
          <div>
            <Heading
              size={3}
              color="black"
              bg="white"
              text="We have separate pricing for UK members and those overseas. Please choose based on your main location:"
            />
          </div>
          <div>
            
            <div style={{ marginBottom: "1em" }}>
              <Button
                color="sky"
                
                to="/pay-uk"
              >Based in the UK</Button>
            </div>
            <div>
              <Button
                color="rose"                
                to="/pay-international"
              >Based elsewhere</Button>
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

export default SubscribeChoicePage;

export const pageQuery = graphql`
  query SubscribeChoicePageQuery {
    payPage: prismicHomepage {
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
              fluid(
                srcSetBreakpoints: [600, 800, 1000, 1200, 1400, 1600, 1920]
                quality: 80
                grayscale: true
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
