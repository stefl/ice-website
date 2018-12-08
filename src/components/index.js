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

const ThirdCol = styled.div`
  ${tw`w-full md:w-1/3 lg:w-1/3 xl:w-1/3 text-center`}
`

const Thirds = styled.div`
  max-width: 48rem;
  ${tw`flex flex-wrap m-auto`}
`

const HalfCol = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-center px-2`}
`

const Halves = styled.div`
  ${tw`flex flex-wrap m-auto w-full`}
`

const StandardIcon = styled.div`
  ${tw`w-24 m-auto py-8`}
`

const SimpleHeader = styled.h4`
  ${tw`p-2 text-white bg-black inline m-auto`}
`

const PaddedCol = styled.div`
  ${tw`px-2`}
`

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
  Narrow,
  Thirds,
  ThirdCol,
  HalfCol,
  Halves,
  StandardIcon,
  SimpleHeader,
  PaddedCol
}
