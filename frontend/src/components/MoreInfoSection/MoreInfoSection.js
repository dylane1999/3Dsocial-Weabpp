import React from "react";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Printer1 from "../../img/Printer1.png";
import InfoSection1 from "./InfoSection1"
import InfoSection2 from "./InfoSection2"


const Root = styled.div`
  height: 100%;
  width: 100%;

`;

export const MoreInfoSection = () => {
  return (
    <Root>
      <InfoSection1></InfoSection1>
      <InfoSection2></InfoSection2>
    </Root>
  );
};

export default MoreInfoSection;

