import styled from 'react-emotion'

const RoundedBox = styled.a`
  position: relative;
  ${tw`w-12 h-12 text-center`};
  margin: auto;
  display: block;
`

const RoundedDiamond = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  ${tw`w-12 h-12 rounded-lg text-center`};
  background-color: ${props => {
    console.log('theme', { props })
    return props.theme.colors[props.bg]
  }};
  transform: rotate(-45deg) scale(0.711);
`

const RoundedIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: white;
`

export { RoundedIcon, RoundedDiamond, RoundedBox }
