import React from "react";
import Dimensions from "react-dimensions";
import memoizeOne from "memoize-one";
import styled from "react-emotion";
import Chevron from "../../svgs/chevron.svg";
import { animateScroll } from "react-scroll";

const FlexContent = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-center`};
`;

const RoundedBox = styled.a`
  position: relative;
  ${tw`w-12 h-12 text-center`};
  margin: auto;
  display: block;
`;

const RoundedDiamond = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  ${tw`w-12 h-12 rounded-lg text-center`};
  background-color: ${props => {
    console.log("theme", { props });
    return props.theme.colors[props.bg];
  }};
  transform: rotate(-45deg) scale(0.711);
`;

const RoundedIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: white;
`;

class HeroContents extends React.PureComponent {
  state = {};

  static getDerivedStateFromProps({ containerHeight }) {
    return { fixedHeight: containerHeight };
  }

  scroll = () => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 500,
      delay: 100,
      smooth: "easeInOutQuad"
    });
  };

  render() {
    const { children, containerWidth, containerHeight, color } = this.props;
    const { fixedHeight } = this.state;
    const { scroll } = this;
    return (
      <div style={{ position: "relative", height: fixedHeight + "px" }}>
        <FlexContent>{children}</FlexContent>
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            textAlign: "center",
            width: "100%"
          }}
        >
          <RoundedBox onClick={scroll}>
            <RoundedDiamond bg={color} />
            <RoundedIcon>
              <Chevron
                style={{ width: "100%", height: "auto", margin: "auto" }}
              />
            </RoundedIcon>
          </RoundedBox>
        </div>
      </div>
    );
  }
}

export default Dimensions()(HeroContents);
