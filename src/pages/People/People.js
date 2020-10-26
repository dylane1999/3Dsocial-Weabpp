import React, { Fragment } from "react";
import styled from "styled-components";

import { Container } from "components/Layout";
import Skeleton from "components/Skeleton";
import { Loading } from "components/Loading";
import Empty from "components/Empty";
import InfiniteScroll from "components/InfiniteScroll";
import Head from "components/Head";
import PeopleCard from "./PeopleCard";

import { PEOPLE_PAGE_USERS_LIMIT } from "constants/DataLimit";

import { useStore } from "store";

import { Query } from "react-apollo";

const Root = styled(Container)`
  margin-top: ${(p) => p.theme.spacing.lg};

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    margin-left: ${(p) => p.theme.spacing.lg};
    padding: 0;
  }
`;

const PeopleContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
grid-gap: 20px;
margin-bottom: ${(p) => p.theme.spacing.lg};


  @media(max-width: 1600px){
    grid-template-columns: repeat(4, 3fr);
  }

  @media(max-width: 1500px){
    grid-template-columns: repeat(3, 3fr);
  }
`;

const Person = styled.div`
  height: 400px;
  width: 200px;
  background-color: white;
`;

/**
 * People page
 */
const People = () => {
  const [{ auth }] = useStore();
  const variables = {
    userId: auth.user.id,
    skip: 0,
    limit: PEOPLE_PAGE_USERS_LIMIT,
  };

  return (
    <Root maxWidth="md">
      <PeopleContainer>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>

      </PeopleContainer>
    </Root>
  );
};

export default People;
