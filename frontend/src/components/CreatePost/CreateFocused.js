import React, { useState } from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";

import { Spacing, Overlay, Container } from "components/Layout";
import { Error } from "components/Text";
import { Button } from "components/Form";
import Avatar from "components/Avatar";

import PostImageUpload from "pages/Home/PostImageUpload";

import { GET_FOLLOWED_POSTS, CREATE_POST } from "graphql/post";
import { GET_AUTH_USER, GET_USER_POSTS } from "graphql/user";

import { useStore } from "store";

import { PROFILE_PAGE_POSTS_LIMIT } from "constants/DataLimit";
import { HOME_PAGE_POSTS_LIMIT } from "constants/DataLimit";
import { MAX_POST_IMAGE_SIZE } from "constants/ImageSize";



import { useGlobalMessage } from "hooks/useGlobalMessage";

const Root = styled.div`
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
`;

const Popup = styled.div`
  display: flex;

  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  background: #FFFAFA;
  border: none;
  width: 50vw;
  height: 25vw;
  border-radius: 12px;
`;

const CreateFocused = () => {
  return (
    <Root>
      <Popup></Popup>
    </Root>
  );
};

export default CreateFocused;
