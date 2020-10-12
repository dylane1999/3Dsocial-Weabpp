import React, { useState } from "react";
import styled from "styled-components";
import PostAvatar from "./PostAvatar";
import ThumbnailUpload from "./UploadButtons/ThumbnailUpload";
import FileUpload from "./UploadButtons/FileUpload";

const Popup = styled.div`
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: none;
  width: 60vw;
  height: 30vw;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 25fr 75fr;
  grid-template-rows: auto;
  color: black;
  grid-gap: 10px;
  background: rgba(19, 18, 18, 0.2);


  &:before {
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(10px);
  }


`;

const LeftWrapper = styled.div`
  width: 100%
  height: 100%;
`;

const RightWrapper = styled.div`
  display: flex;
  width: 100%
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-right: 25px;
`;

const Title = styled.textarea`
  width: 100%
  height: 100%;
  background: #A2A2A2;
  border-radius: 8px;
  border: none; 
  outline: none;
  resize: none;
  overflow: auto;
  color: white;
  padding: 12px 20px;
 

`;

const Description = styled.textarea`
  width: 100%
  height: 100%;
  background: #A2A2A2;
  border-radius: 8px;
  border: none; 
  outline: none;
  resize: none;
  overflow: auto;
  color: white;
  padding: 12px 20px;

`;

const TitleWrapper = styled.div`
  width: 100%
  height: 60px;
  padding-bottom: 15px;
  `;

const DescriptionWrapper = styled.div`
  width: 100%
  height: 50%;
  `;

const Form = styled.form`
  width: 100%
  height: 50%;
  `;

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;

  margin: 5px;
  width: 150px;
  box-sizing: border-box;
  background: ${(prop) => (prop.correct ? "white" : "red")};
`;

const Submit = styled.form`
  width: 100%
  height: 50%;
  `;

  const UploadButtons = styled.div`
  display: flex;
  width: 100%
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  margin-left: 20px;
  color: white;
  background: #149bde;
  border-radius: 54px;
`;




const PostPopup = (props) => {
  return (
    <Popup>
      <LeftWrapper>
        <PostAvatar buttonClick={props.buttonClick} />
      </LeftWrapper>
      <RightWrapper>
        <Form>
          <TitleWrapper>
            <Title placeholder=" Title" />
          </TitleWrapper>
          <DescriptionWrapper>
            <Description placeholder=" Post Description" />
          </DescriptionWrapper>
          <UploadButtons>
            <FileUpload/>
            <ThumbnailUpload/>
            <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
          </UploadButtons>
        </Form>
      </RightWrapper>
    </Popup>
  );
};

export default PostPopup;
