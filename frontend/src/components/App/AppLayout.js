import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "components/App/Header";
import NotFound from "components/NotFound";
import SideBar from "./SideBar";
import UserSuggestions from "./UserSuggestions";

import Home from "pages/Home";
import Profile from "pages/Profile";
import Explore from "pages/Explore";
import People from "pages/People";
import Notifications from "pages/Notifications";
import Post from "pages/Post";
import Messages from "pages/Messages";

import { useWindowSize } from "hooks/useWindowSize";
import { useClickOutside } from "hooks/useClickOutside";

import * as Routes from "routes";

import theme from "theme";

import { useStore } from "store";
import { SET_AUTH_USER } from "store/auth";

import Box from "@material-ui/core/Box";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (min-width: ${(p) => p.theme.screen.md}) {
    width: ${(p) => p.theme.screen.md};
  }

  @media (min-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + "px"}) {
    width: ${(p) => p.theme.screen.lg};
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

/**
 * Main layout of the app, when user is authenticated
 */
const AppLayout = ({ location, authUser }) => {
  const [{ auth }, dispatch] = useStore();

  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= parseInt(theme.screen.md, 10);
  const [isSideBarOpen, setIsSidebarOpen] = useState(isDesktop);

  const sideBarRef = useRef("");

  useEffect(() => {
    dispatch({ type: SET_AUTH_USER, payload: authUser });
  }, [dispatch, authUser]);

  useClickOutside(sideBarRef, () => {
    if (!isDesktop && isSideBarOpen) {
      setIsSidebarOpen(false);
    }
  });

  useEffect(() => {
    setIsSidebarOpen(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    return () => {
      if (!isDesktop) {
        setIsSidebarOpen(false);
      }
    };
  }, [location.pathname, isDesktop]);

  if (!auth.user) return null;

  return (
    <>
      <Header toggleSideBar={() => setIsSidebarOpen(!isSideBarOpen)} />

      <Box flexDirection="row" justifyContent="center" display="flex">
        <Box>
          <Box flexDirection="column" justifyContent="center" display="flex">
            <Box pb={12}>
              {" "}
              <SideBar isOpen={isSideBarOpen} sideBarRef={sideBarRef} />
            </Box>
            <Box>
              {" "}
              <UserSuggestions pathname={location.pathname} />
            </Box>
          </Box>
        </Box>
        <Box>
          <Switch>
            <Route exact path={Routes.HOME} component={Home} />

            <Route exact path={Routes.EXPLORE} component={Explore} />

            <Route exact path={Routes.PEOPLE} component={People} />

            <Route
              exact
              path={Routes.NOTIFICATIONS}
              component={Notifications}
            />

            <Route exact path={Routes.MESSAGES} component={Messages} />

            <Route exact path={Routes.USER_PROFILE} component={Profile} />

            <Route exact path={Routes.POST} component={Post} />

            <Route component={NotFound} />
          </Switch>
        </Box>
      </Box>
    </>
  );
};

AppLayout.propTypes = {
  location: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default withRouter(AppLayout);
