import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

import { NotificationIcon, MenuIcon, EnvelopeOpenIcon } from "components/icons";
import { Container, Spacing } from "components/Layout";
import { A } from "components/Text";
import Avatar from "components/Avatar";
import Search from "components/Search";
import HeaderDropDowns from "./HeaderDropDowns";

import { useClickOutside } from "hooks/useClickOutside";

import { useStore } from "store";

import { HEADER_HEIGHT } from "constants/Layout";
import SiteInfo from "constants/SiteInfo.json";

import * as Routes from "routes";

import defaultPic from "../../../img/default-pic.png"


const NavWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row no-wrap;
  align-items: center;
  justify-content: flex-end;
  height: ${HEADER_HEIGHT}px;
  background-color: #198fd2;
  width: 100vw;
`;

const SearchWrapper = styled.div`
  width: 200px;
`;

const Hamburger = styled.div`
  cursor: pointer;

  @media (min-width: ${(p) => p.theme.screen.md}) {
    display: none;
  }
`;

const Button = styled.div`
  height: 100%;
  width: 100%;
  padding-right: 15px;

`;

const Logo = styled(A)`
  display: none;
  color: ${(p) => p.theme.colors.primary.main};
  font-weight: ${(p) => p.theme.font.weight.bold};
  font-size: ${(p) => p.theme.font.size.sm};

  &:hover {
    color: ${(p) => p.theme.colors.primary.main};
  }

  @media (min-width: ${(p) => p.theme.screen.md}) {
    display: block;
  }
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
  background-color: #198fd2;
  padding-right: 15px;

`;

const RightSection = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: #373737; 
  padding-right: 15px;
`;

const UserName = styled.div`
  font-family: proxima-nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding-right: 15px;
  color: #ffffff;

  @media (max-width: 700px) {
    display: none;
  }
`;

/**
 * Header of the App when user is authenticated
 */
const Header = ({ location, toggleSideBar }) => {
  const [{ auth }] = useStore();

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownData, setDropdownData] = useState([]);

  const messageRef = useRef(null);
  const notificationRef = useRef(null);
  const userRef = useRef(null);

  const closeOnClickOutside = () => {
    if (dropdownOpen) {
      closeDropDown();
    }
  };

  useClickOutside(messageRef, closeOnClickOutside);
  useClickOutside(notificationRef, closeOnClickOutside);
  useClickOutside(userRef, closeOnClickOutside);

  const closeDropDown = () => {
    setDropdownOpen(null);
    setDropdownData([]);
  };

  useEffect(() => {
    return () => closeDropDown();
  }, [location.pathname]);

  const handleIconClick = (dropdownType) => {
    if (dropdownOpen) {
      closeDropDown();
    } else {
      if (dropdownType === "NOTIFICATION") {
        setDropdownData(auth.user.newNotifications);
      } else if (dropdownType === "MESSAGE") {
        setDropdownData(auth.user.newConversations);
      }

      setDropdownOpen(dropdownType);
    }
  };

  return (
    <>
      <NavWrapper>
        <LeftSection>
           {/*code to disaply site name  <Logo to={Routes.HOME}>{SiteInfo.name}</Logo>*/}
          <SearchWrapper>
            {" "}
            <Search location={location} placeholder="Search" />
          </SearchWrapper>
        </LeftSection>
        <RightSection>
          <UserContainer>
            <UserName>
              <p>username change</p>
            </UserName>
            <Button ghost onClick={() => handleIconClick("USER")}>
              <Avatar image={defaultPic} size={40} />
            </Button>
            <HeaderDropDowns
              messageRef={messageRef}
              notificationRef={notificationRef}
              userRef={userRef}
              dropdownOpen={dropdownOpen}
              dropdownData={dropdownData}
              closeDropDown={closeDropDown}
            />
          </UserContainer>
          <Hamburger onClick={toggleSideBar}>
            <MenuIcon />
          </Hamburger>
        </RightSection>
      </NavWrapper>
    </>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default withRouter(Header);
