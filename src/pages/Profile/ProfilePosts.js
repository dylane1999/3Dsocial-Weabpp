import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { generatePath } from 'react-router-dom';

import Skeleton from 'components/Skeleton';
import Modal from 'components/Modal';
import PostPopup from 'components/PostPopup';
import PostCard from 'components/PostCard';
import { Spacing } from 'components/Layout';
import InfiniteScroll from 'components/InfiniteScroll';
import { Loading } from 'components/Loading';
import Empty from 'components/Empty';

import { PROFILE_PAGE_POSTS_LIMIT } from 'constants/DataLimit';

import { GET_USER_POSTS } from 'graphql/user';

import * as Routes from 'routes';

/**
 * Renders posts in profile page
 */
const ProfilePosts = ({ username }) => {
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);
  const [modalPostId, setModalPostId] = useState('');

  const openModal = postId => {
    window.history.pushState('', '', generatePath(Routes.POST, { id: postId }));
    setModalPostId(postId);
    setIsPostPopupOpen(true);
  };

  const closeModal = () => {
    window.history.pushState(
      '',
      '',
      generatePath(Routes.USER_PROFILE, { username })
    );
    setIsPostPopupOpen(false);
  };

  const variables = { username, skip: 0, limit: PROFILE_PAGE_POSTS_LIMIT };

  return (

            <Skeleton
              height={500}
              bottom="lg"
              top="lg"
              count={PROFILE_PAGE_POSTS_LIMIT}
            />


  );
};

ProfilePosts.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfilePosts;
