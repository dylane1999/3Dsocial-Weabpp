import React, { useState } from "react";

import styled from "styled-components";


import Avatar from "components/Avatar";


import PostIcon from "../../img/PostIcon.svg";

const Root = styled.div`
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  margin-left: 20px;

  background: #149bde;
  border-radius: 54px;
`;




const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CreateUnfocused = () => {
  return (
    <Root>
      <Wrapper>
        <img alt="x" src={PostIcon}/>
        <Button>create a post</Button>
      </Wrapper>
    </Root>
  );
};

export default CreateUnfocused;
