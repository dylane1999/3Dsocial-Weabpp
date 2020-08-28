import React from "react";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Printer1 from "../../img/Printer1.png";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50rem;
  width: 100%;
  background-color: #149bde;

`;

const Heading = styled.p`
  font-family: aktiv-grotesk, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 41.89px;
  line-height: 54px;

  color: #ffffff;

  @media (max-width: 415px) {
    margin: 16px;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  width: 500px;
  padding-bottom: 30px;

  @media (max-width: 500px) {
    margin: 16px;
    width: 80%;
  }
`;

export const InfoSection1 = () => {
  return (
    <Root>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="row"
        p={1}
        m={1}
      >
        <Box>
          <img src={Printer1} />{" "}
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          p={1}
          pl={5}
          m={1}
        >
          <Heading>Check this Stuff Out.</Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </Paragraph>
        </Box>
      </Box>
    </Root>
  );
};

export default InfoSection1;
