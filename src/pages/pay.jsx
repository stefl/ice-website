import React, { Component } from 'react'
import { Hero, Layout, Heading, Section } from 'components'
import styled from "@emotion/styled"

const Button = styled.a`
  text-decoration: none;
  border-bottom: 4px solid white;
  margin: 1em;
  display: block;
  ${tw`bg-black text-white px-3 py-2 m-auto text-center`};
`

class SubscribeButton extends React.Component {
  render() {
    const { href, text, plan } = this.props
    return <Button 
      href="javascript:void(0)" 
      data-cb-type="checkout" 
      data-cb-plan-id={plan}>{text}</Button>
  }
}


class Subscribe extends Component {

  componentDidMount() {
    const el = document.createElement('script');
    el.onload = () => {
      window.Chargebee.init({
        "site": "icepay"
      });
      window.Chargebee.registerAgain();
      // this.setState({ chargebeeReady: true });
    };
    el.setAttribute('src', 'https://js.chargebee.com/v2/chargebee.js');
    document.body.appendChild(el);
  }

  render() {
    return (
      <Layout color="mint">
        <Hero color="mint">
          <Heading size={1} color="white" bg="black" text="Set up your ICE subscription" />
          <Heading size={3} color="black" bg="white" text="£50 per month, or £500 annually" />
        </Hero>

        <Section>
          <div>
            <Heading size={3} color="black" bg="white" text="Please choose from the following subscription options. If you have a UK bank account, to help us with lower payment charges, please choose GoCardless at checkout." />
            <SubscribeButton
              color="sky"
              text="Subscribe Monthly"
              plan="ice-monthly-membership"
            />

            <SubscribeButton
              color="rose"
              text="Subscribe Annually"
              plan="ice-annual"
            />

            <SubscribeButton
              color="black"
              text="Test with £0.30"
              plan="test"
            />
          </div>
        </Section>
      </Layout>
    )
  }
}

export default Subscribe
