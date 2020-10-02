import React, { useState } from "react";
import styled from "styled-components";
import PostAvatar from "./PostAvatar";
import exit from "../../img/exitIcon.svg";

const Popup = styled.div`
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  background: #fffafa;
  border: none;
  width: 60vw;
  height: 30vw;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 25fr 75fr;
  grid-template-rows: auto;
  color: black;
  grid-gap: 10px;
`;

const LeftWrapper = styled.div`
  display: flex;
  width: 100%
  height: 45%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 35px;
`;

const RightWrapper = styled.div`
  display: flex;
  width: 100%
  height: 45%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 25px;
`;

const Right = styled.div``;

const PostPopup = (props) => {
  return (
    <Popup>
      <LeftWrapper>
        <img src={exit} alt="exit" onClick={props.buttonClick} />
        <PostAvatar />
      </LeftWrapper>
      <RightWrapper>
        <h1>right</h1>
      </RightWrapper>
    </Popup>
  );
};

export default PostPopup;
