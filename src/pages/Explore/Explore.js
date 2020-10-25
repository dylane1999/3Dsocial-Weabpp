import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { generatePath } from 'react-router-dom';

import { Container } from 'components/Layout';
import Skeleton from 'components/Skeleton';

import Head from 'components/Head';



import { EXPLORE_PAGE_POSTS_LIMIT } from 'constants/DataLimit';

import { useStore } from 'store';

import * as Routes from 'routes';

const Root = styled(Container)`
  margin-top: ${p => p.theme.spacing.lg};
  margin-bottom: ${p => p.theme.spacing.sm};
  width: 60vw;

  @media (min-width: ${p => p.theme.screen.lg}) {
    margin-left: ${p => p.theme.spacing.lg};
    padding: 0;
  }
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(520px, 3fr));
  grid-auto-rows: auto;
  grid-gap: 20px;

  @media (min-width: ${p => p.theme.screen.lg}) {
    margin-left: ${p => p.theme.spacing.lg};
    padding: 0;
  }

`;

/**
 * Explore page
 */
const Explore = () => {
  const [{ auth }] = useStore();

  const [modalPostId, setModalPostId] = useState(null);

  const closeModal = () => {
    window.history.pushState('', '', '/explore');
    setModalPostId(null);
  };

  const openModal = postId => {
    window.history.pushState('', '', generatePath(Routes.POST, { id: postId }));
    setModalPostId(postId);
  };

  const variables = {
    authUserId: auth.user.id,
    skip: 0,
    limit: EXPLORE_PAGE_POSTS_LIMIT,
  };

  return (
    <Root maxWidth="md">
      <Head title="Explore New Posts and Users" />


              <PostsContainer>
                <Skeleton height={300} count={EXPLORE_PAGE_POSTS_LIMIT} />
              </PostsContainer>

    </Root>
  );
};

export default Explore;
