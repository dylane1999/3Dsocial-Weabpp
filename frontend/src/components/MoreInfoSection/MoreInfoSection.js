import React from "react";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Printer1 from "../../img/Printer1.png";
import InfoSection1 from "./InfoSection1";
import InfoSection2 from "./InfoSection2";

const Root = styled.div`
  height: 100%;
  width: 100%;
  background-color: #149bde;

  @media (max-width: 1100px) {
    padding-top: 75px;
    height: 100%;
    width: 100%;
    background-color: #149bde;
    }
`;

export const MoreInfoSection = () => {
  const screenLarge = useMediaQuery("(min-width: 1100px)");
  const screenSmall = useMediaQuery("(max-width: 1100px)");
  return (
    <Root>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <InfoSection1></InfoSection1>
        <InfoSection2></InfoSection2>
      </Box>
    </Root>
  );
};

export default MoreInfoSection;
