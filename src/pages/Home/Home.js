import React, { useState } from "react";
import styled from "styled-components";
import { generatePath } from "react-router-dom";

import { A } from "components/Text";

import { Loading } from "components/Loading";
import InfiniteScroll from "components/InfiniteScroll";
import Skeleton from "components/Skeleton";
import Head from "components/Head";

import { useStore } from "store";

import { HOME_PAGE_POSTS_LIMIT } from "constants/DataLimit";
import { Container } from "components/Layout";

import * as Routes from "routes";

import Post from "../../components/Post/Post";

import Drone from "../../img/Drone.png";

const Empty = styled.div`
  padding: ${(p) => p.theme.spacing.sm};
  border: 1px solid ${(p) => p.theme.colors.border.main};
  border-radius: ${(p) => p.theme.radius.sm};
  margin-top: ${(p) => p.theme.spacing.lg};
  background-color: ${(p) => p.theme.colors.white};
`;

const StyledA = styled(A)`
  text-decoration: underline;
  font-weight: ${(p) => p.theme.font.weight.bold};
`;

const Spacing = styled.div`
  padding: 15px;
`;

/**
 * Home page of the app
 */
const Home = () => {
  const [{ auth }] = useStore();
  const [modalPostId, setModalPostId] = useState(null);

  const closeModal = () => {
    window.history.pushState("", "", "/");
    setModalPostId(null);
  };

  const openModal = (postId) => {
    window.history.pushState("", "", generatePath(Routes.POST, { id: postId }));
    setModalPostId(postId);
  };

  const variables = {
    //   userId: auth.user.id,
    skip: 0,
    limit: HOME_PAGE_POSTS_LIMIT,
  };

  return (
    <Container maxWidth="sm">
      <Spacing />
      <Post
        backgroundImage={Drone}
        postUser={"charlie wilson"}
        postTitle={"Printable Drone"}
        postDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium a velit at vitae potenti consequat. Nec leo, gravida viverra augue ut tincidunt rutrum odio diam."}
        timestamp={12}
      />
    </Container>
  );
};

export default Home;
