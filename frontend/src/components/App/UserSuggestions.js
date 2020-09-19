import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { matchPath } from "react-router";
import { generatePath } from "react-router-dom";
import { Query } from "react-apollo";

import { Loading } from "components/Loading";
import { A } from "components/Text";
import { Spacing } from "components/Layout";
import Avatar from "components/Avatar";

import { useStore } from "store";

import { USER_SUGGESTIONS } from "graphql/user";

import { USER_SUGGESTIONS_WIDTH, HEADER_HEIGHT } from "constants/Layout";

import * as Routes from "routes";

const Root = styled.div`
  display: none;
  background-color: inherit;
  position: sticky;
  top: ${HEADER_HEIGHT + 40}px;
  right: 0;
  height: 100%;
  width: ${USER_SUGGESTIONS_WIDTH}px;
  padding: ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.radius.sm};

  @media (min-width: ${(p) => p.theme.screen.md}) {
    display: block;
  }
`;

const List = styled.ul`
  padding: 0;
  padding-top: ${(p) => p.theme.spacing.xs};
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-bottom: ${(p) => p.theme.spacing.sm};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FullName = styled.div`
  color: white;
  font-family: proxima-nova;
  font-size: 17px;
`;

const UserName = styled.div`
  color: #DCDCDC;
  font-family: proxima-nova;
`;

const Heading = styled.div`
  color: white;
  font-size: 25.888px;
  font-family: aktiv-grotesk;
`;

/**
 * Displays user suggestions
 */
const UserSuggestions = ({ pathname }) => {
  const [{ auth }] = useStore();

  // Code that hides user suggestionbox based upon current path
  //
  //const hideUserSuggestions = matchPath(pathname, {
  //    path: [Routes.MESSAGES, Routes.PEOPLE, Routes.EXPLORE, Routes.USER_PROFILE],
  //  });

  //  if (hideUserSuggestions) return null;

  return (
    <Query query={USER_SUGGESTIONS} variables={{ userId: auth.user.id }}>
      {({ data, loading }) => {
        if (loading)
          return (
            <Root>
              <Loading />
            </Root>
          );

        if (!data.suggestPeople.length > 0) {
          return null;
        }

        return (
          <Root>
            <Heading>Suggestions</Heading>

            <List>
              {data.suggestPeople.map((user) => (
                <ListItem key={user.id}>
                  <A
                    to={generatePath(Routes.USER_PROFILE, {
                      username: user.username,
                    })}
                  >
                    <Avatar image={user.image} size={50} />
                  </A>

                  <Spacing left="xs">
                    <A
                      to={generatePath(Routes.USER_PROFILE, {
                        username: user.username,
                      })}
                    >
                      <FullName>{user.fullName}</FullName>
                      <UserName>@{user.username}</UserName>
                    </A>
                  </Spacing>
                </ListItem>
              ))}
            </List>
          </Root>
        );
      }}
    </Query>
  );
};

UserSuggestions.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default UserSuggestions;
