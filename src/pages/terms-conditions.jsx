import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { Hero, Layout, Heading, Section, Page } from 'components'

class Terms extends Component {
  render() {
    const {
      data: { coc },
    } = this.props
    return (
      <Layout color="rose">
        <Hero color="rose">
          <Heading size={1} color="white" bg="black" text={coc.data.title.text} />
          <Heading size={3} color="black" bg="white" text={coc.data.subtitle.text} />
        </Hero>

        <Section color="black" bg="white" flexible>
          <Page>
            <div>
              <h3>1 TERMS OF WEBSITE USE</h3>
              <p>
                This terms of use (together with the documents referred to in it) tells you the terms of use on which
                you may make use of our website theicelist.com (our site), whether as a guest or a registered user. Use
                of our site includes accessing, browsing, or registering to use our site.
              </p>
              <p>
                Please read these terms of use carefully before you start to use our site, as these will apply to your
                use of our site. We recommend that you print a copy of this for future reference.
              </p>
              <p>
                By using our site, you confirm that you accept these terms of use and that you agree to comply with
                them.
              </p>
              <h3>2 INFORMATION ABOUT US</h3>
              <p>
                theicelist.com is a site operated by ICE LIST (“We”). We are registered in England and Wales under
                company number 08079373 and have our registered office at 107 Cheapside, 9th Floor, London, EC2V 6DN,
                England and Wales. Our main trading address is 107 Cheapside, 9th Floor, London, EC2V 6DN, England and
                Wales.
              </p>
              <p>We are a limited company.</p>
              <h3>3 CHANGES TO THESE TERMS</h3>
              <p>We may revise these terms of use at any time by amending this page.</p>
              <p>
                Please check this page from time to time to take notice of any changes we have made, as they are binding
                on you.
              </p>
              <h3>4 CHANGES TO OUR SITE</h3>
              <p>
                We may update our site from time to time, and may change the content at any time. However, please note
                that any of the content on our site may be out of date at any given time, and we are under no obligation
                to update it.
              </p>
              <p>We do not guarantee that our site, or any content on it, will be free from errors or omissions.</p>
              <h3>5 ACCESSING OUR SITE</h3>
              <p>Our site is made available free of charge.</p>
              <p>
                We do not guarantee that our site, or any content on it, will always be available or be uninterrupted.
                Access to our site is permitted on a temporary basis. We may suspend, withdraw, discontinue or change
                all or any part of our site without notice. We will not be liable to you if for any reason our site is
                unavailable at any time or for any period.
              </p>
              <p>You are responsible for making all arrangements necessary for you to have access to our site.</p>
              <p>
                You are also responsible for ensuring that all persons who access our site through your internet
                connection are aware of these terms of use and other applicable terms and conditions, and that they
                comply with them.
              </p>
              <h3>6 YOUR ACCOUNT AND PASSWORD</h3>
              <p>
                If you choose, or you are provided with, a user identification code, password or any other piece of
                information as part of our security procedures, you must treat such information as confidential. You
                must not disclose it to any third party.
              </p>
              <p>
                We have the right to disable any user identification code or password, whether chosen by you or
                allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the
                provisions of these terms of use.
              </p>
              <p>
                If you know or suspect that anyone other than you knows your user identification code or password, you
                must promptly notify us atinfo@theicelist.com.
              </p>
              <h3>7 INTELLECTUAL PROPERTY RIGHTS</h3>
              <p>
                We are the owner or the licensee of all intellectual property rights in our site, and in the material
                published on it. Those works are protected by copyright laws and treaties around the world. All such
                rights are reserved.
              </p>
              <p>
                You may not copy, print or download extracts of any page(s) from our site for personal or commercial
                use.
              </p>
              <p>
                If you print off, copy or download any part of our site in breach of these terms of use, your right to
                use our site will cease immediately and you must, at our option, return or destroy any copies of the
                materials you have made.
              </p>
              <h3>8 NO RELIANCE ON INFORMATION</h3>
              <p>
                The content on our site is provided for general information only. It is not intended to amount to advice
                on which you should rely. You must obtain professional or specialist advice before taking, or refraining
                from, any action on the basis of the content on our site.
              </p>
              <p>
                Although we make reasonable efforts to update the information on our site, we make no representations,
                warranties or guarantees, whether express or implied, that the content on our site is accurate, complete
                or up-to-date.
              </p>
              <h3>9 LIMITATION OF OUR LIABILITY</h3>
              <p>
                Nothing in these terms of use excludes or limits our liability for death or personal injury arising from
                our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be
                excluded or limited by the law of England and Wales.
              </p>
              <p>
                To the extent permitted by law, we exclude all conditions, warranties, representations or other terms
                which may apply to our site or any content on it, whether express or implied.
              </p>
              <p>
                We will not be liable to any user for any loss or damage, whether in contract, tort (including
                negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection
                with:
              </p>
              <ul>
                <li>use of, or inability to use, our site; or</li>
                <li>use of or reliance on any content displayed on our site.</li>
              </ul>
              <h4>If you are a business user, please note that in particular, we will not be liable for:</h4>
              <ul>
                <li>loss of profits, sales, business, or revenue;</li>
                <li>business interruption;</li>
                <li>loss of anticipated savings;</li>
                <li>loss of business opportunity, goodwill or reputation; or</li>
                <li>any indirect or consequential loss or damage.</li>
              </ul>
              <p>
                If you are a consumer user, please note that we only provide our site for domestic and private use. You
                agree not to use our site for any commercial or business purposes, and we have no liability to you for
                any loss of profit, loss of business, business interruption, or loss of business opportunity.
              </p>
              <p>
                We will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or
                other technologically harmful material that may infect your computer equipment, computer programs, data
                or other proprietary material due to your use of our site or to your downloading of any content on it,
                or on any website linked to it.
              </p>
              <p>
                We assume no responsibility for the content of websites linked on our site. Such links should not be
                interpreted as endorsement by us of those linked websites. We will not be liable for any loss or damage
                that may arise from your use of them.
              </p>
              <h3>10 UPLOADING CONTENT TO OUR SITE</h3>
              <p>
                Whenever you make use of a feature that allows you to upload content to our site, or to make contact
                with other users of our site, you must comply with the spirit and the letter of the following standards.
                The standards apply to each part of any contribution as well as to its whole.
              </p>
              <h3>Contributions must:</h3>
              <ul>
                <li>be accurate (where they state facts);</li>
                <li>be genuinely held (where they state opinions); and</li>
                <li>comply with applicable law in the UK and in any country from which they are posted.</li>
              </ul>
              <h4>Contributions must not:</h4>
              <ul>
                <li>contain any material which is defamatory of any person;</li>
                <li>contain any material which is obscene, offensive, hateful or inflammatory;</li>
                <li>promote sexually explicit material;</li>
                <li>promote violence;</li>
                <li>
                  promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or
                  age;
                </li>
                <li>infringe any copyright, database right or trade mark of any other person;</li>
                <li>be likely to deceive any person;</li>
                <li>
                  be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of
                  confidence;
                </li>
                <li>promote any illegal activity;</li>
                <li>
                  be threatening, abuse or invade another’s privacy, or cause annoyance, inconvenience or needless
                  anxiety;
                </li>
                <li>be likely to harass, upset, embarrass, alarm or annoy any other person;</li>
                <li>
                  be used to impersonate any person, or to misrepresent your identity or affiliation with any person;
                </li>
                <li>give the impression that they emanate from us, if this is not the case; or</li>
                <li>
                  advocate promote or assist any unlawful act such as (by way of example only) copyright infringement or
                  computer misuse.
                </li>
              </ul>
              <p>
                You warrant that any such contribution does comply with those standards, and you will be liable to us
                and indemnify us for any breach of that warranty. If you are a consumer user, this means you will be
                responsible for any loss or damage we suffer as a result of your breach of warranty.
              </p>
              <p>
                Any content you upload to our site will be considered non-confidential and non-proprietary, and we have
                the right to use, copy, distribute and disclose to third parties any such content for any purpose.
              </p>
              <p>
                We also have the right to disclose your identity to any third party who is claiming that any content
                posted or uploaded by you to our site constitutes a violation of their intellectual property rights, or
                of their right to privacy.
              </p>
              <p>
                We will not be responsible, or liable to any third party, for the content or accuracy of any content
                posted by you or any other user of our site.
              </p>
              <p>
                We have the right to remove any posting you make on our site if, in our opinion, your post does not
                comply with the content standards set outabove.
              </p>
              <p>The views expressed by other users on our site do not represent our views or values.</p>
              <h3>11 VIRUSES</h3>
              <p>We do not guarantee that our site will be secure or free from bugs or viruses.</p>
              <p>
                You are responsible for configuring your information technology, computer programmes and platform in
                order to access our site. You should use your own virus protection software.
              </p>
              <p>
                You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other
                material which is malicious or technologically harmful. You must not attempt to gain unauthorised access
                to our site, the server on which our site is stored or any server, computer or database connected to our
                site. You must not attack our site via a denial-of-service attack or a distributed denial-of service
                attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act
                1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate
                with those authorities by disclosing your identity to them. In the event of such a breach, your right to
                use our site will cease immediately.
              </p>
              <h3>12 LINKING TO OUR SITE</h3>
              <p>
                You may link to our home page, provided you do so in a way that is fair and legal and does not damage
                our reputation or take advantage of it.
              </p>
              <p>
                You must not establish a link in such a way as to suggest any form of association, approval or
                endorsement on our part where none exists.
              </p>
              <p>You must not establish a link to our site in any website that is not owned by you.</p>
              <p>
                Our site must not be framed on any other site, nor may you create a link to any part of our site other
                than the home page.
              </p>
              <p>We reserve the right to withdraw linking permission without notice.</p>
              <p>
                The website in which you are linking must comply in all respects with the content standards set
                outabove.
              </p>
              <p>
                If you wish to make any use of content on our site other than that set out above, please contact
                info@theicelist.com.
              </p>
              <h3>13 THIRD PARTY LINKS AND RESOURCES IN OUR SITE</h3>
              <p>
                Where our site contains links to other sites and resources provided by third parties, these links are
                provided for your information only.
              </p>
              <p>We have no control over the contents of those sites or resources.</p>
              <h3>14 APPLICABLE LAW</h3>
              <p>
                If you are a consumer, please note that these terms of use, its subject matter and its formation, are
                governed by the law England and Wales. You and we both agree that the courts of England and Wales will
                have non-exclusive jurisdiction. However, if you are a resident of Northern Ireland you may also bring
                proceedings in Northern Ireland. If you are resident of Scotland, you may also bring proceedings in
                Scotland.
              </p>
              <p>
                If you are a business, these terms of use, its subject matter and its formation (and any non-contractual
                disputes or claims) are governed bythe law England and Wales. We both agree to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
              <h3>CONTACT US</h3>
              <p>To contact us, please email info@theicelist.com.</p>
              <p>Thank you for visiting our site.</p>
            </div>
          </Page>
        </Section>
      </Layout>
    )
  }
}

export default Terms

Terms.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query TermsQuery {
    coc: prismicTermsAndConditions {
      data {
        title {
          text
        }
        subtitle {
          text
        }
      }
    }
  }
`
