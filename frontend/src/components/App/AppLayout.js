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
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Root = styled.div`
  width: 100%;
  background-color: #313131;
  color: white;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;

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

  const screenLarge = useMediaQuery("(min-width: 971px)");
  const screenSmall = useMediaQuery("(max-width: 971px)");

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

  const GetMarginSize = () => {
    if (screenLarge) {
      return 20;
    } else if (screenSmall) {
      return 0;
    }
  };

  const GetJustifyContent = () => {
    if (screenLarge) {
      return "flex-start";
    } else if (screenSmall) {
      return "center";
    }
  };

  return (
    <>
      <Header toggleSideBar={() => setIsSidebarOpen(!isSideBarOpen)} />
      <Hero> PIX</Hero>
      <Root>
        <Box
          flexDirection="row"
          justifyContent={GetJustifyContent()}
          display="flex"
          ml={GetMarginSize()}
        >
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
      </Root>
    </>
  );
};

AppLayout.propTypes = {
  location: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default withRouter(AppLayout);
