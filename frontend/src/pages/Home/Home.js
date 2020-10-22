import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { generatePath } from 'react-router-dom';
import { Query } from 'react-apollo';

import { A } from 'components/Text';
import PostPopup from 'components/PostPopup';
import Modal from 'components/Modal';
import PostCard from 'components/PostCard';
import { Spacing, Container } from 'components/Layout';
import { Loading } from 'components/Loading';
import InfiniteScroll from 'components/InfiniteScroll';
import Skeleton from 'components/Skeleton';
import CreatePost from 'components/CreatePost';
import Head from 'components/Head';

import { GET_FOLLOWED_POSTS } from 'graphql/post';

import { useStore } from 'store';

import { HOME_PAGE_POSTS_LIMIT } from 'constants/DataLimit';

import * as Routes from 'routes';


const Empty = styled.div`
  padding: ${p => p.theme.spacing.sm};
  border: 1px solid ${p => p.theme.colors.border.main};
  border-radius: ${p => p.theme.radius.sm};
  margin-top: ${p => p.theme.spacing.lg};
  background-color: ${p => p.theme.colors.white};
`;

const StyledA = styled(A)`
  text-decoration: underline;
  font-weight: ${p => p.theme.font.weight.bold};
`;

/**
 * Home page of the app
 */
const Home = () => {
  const [{ auth }] = useStore();
  const [modalPostId, setModalPostId] = useState(null);

  const closeModal = () => {
    window.history.pushState('', '', '/');
    setModalPostId(null);
  };

  const openModal = postId => {
    window.history.pushState('', '', generatePath(Routes.POST, { id: postId }));
    setModalPostId(postId);
  };

  const variables = {
 //   userId: auth.user.id,
    skip: 0,
    limit: HOME_PAGE_POSTS_LIMIT,
  };

  return (
    <Container maxWidth="sm">
      <Head />

      <Spacing top="lg" />

      <CreatePost />


              <Skeleton
                height={500}
                bottom="lg"
                top="lg"
                count={HOME_PAGE_POSTS_LIMIT}
              />

    </Container>
  );
};

export default Home;
