import Listing from './Listing'
import SEO from './SEO'
import Footer from './Footer'
import Header from './Header'
import SliceZone from './SliceZone'
import Title from './Title'
import Layout from './Layout'
import Wrapper from './Wrapper'
import Hero from './Hero'
import Heading from './Heading'
import Logo from './Logo'
import Nav from './Nav'
import Section from './Section'
import styled from 'react-emotion'

const Narrow = styled.header`
  ${tw`max-w-sm text-center mx-2`};
`

export {
  Hero,
  Footer,
  Layout,
  Listing,
  SEO,
  Wrapper,
  SliceZone,
  Title,
  Header,
  Heading,
  Logo,
  Nav,
  Section,
  Narrow
}
