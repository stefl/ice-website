import React, { Component } from "react";
import { Hero, Layout, Heading, Section } from "components";
import styled from "@emotion/styled";

const Button = styled.a`
  text-decoration: none;
  border-bottom: 4px solid white;
  margin: 1em;
  display: block;
  max-width: 18rem;
  ${tw`bg-rose text-white px-3 py-2 m-auto mw-50 text-center`};
`;

class SubscribeButton extends React.Component {
  render() {
    const { href, text, plan } = this.props;
    return (
      <Button
        href="javascript:void(0)"
        data-cb-type="checkout"
        data-cb-plan-id={plan}
      >
        {text}
      </Button>
    );
  }
}

class Subscribe extends Component {
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
          <Heading
            size={3}
            color="black"
            bg="white"
            text="£50 per month, or £540 annually"
          />
        </Hero>

        <Section>
          <div>
            <Heading
              size={3}
              color="black"
              bg="white"
              text="If you have a UK bank account, please choose Direct Debit at checkout."
            />
          </div>
          <div>
            <div
              style={{
                marginBottom: "2em",
                textAlign: "center",
                width: "60%",
                display: "block",
                margin: "auto"
              }}
            >
              <p>
                Direct Debit keeps costs low so more of your subscription goes
                towards overfunning!
              </p>
            </div>
            <div style={{ marginBottom: "1em" }}>
              <SubscribeButton
                color="sky"
                text="Subscribe Monthly"
                plan="ice-monthly-membership"
              />
            </div>
            <div>
              <SubscribeButton
                color="rose"
                text="Subscribe Annually"
                plan="ice-annual"
              />
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

export default Subscribe;

export const pageQuery = graphql`
  query SubscribePageQuery {
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
