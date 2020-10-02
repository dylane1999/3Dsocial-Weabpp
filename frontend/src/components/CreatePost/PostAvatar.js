import React from "react";
import { generatePath, withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import Avatar from "components/Avatar";
import * as Routes from "routes";
import { useStore } from "store";


const PostAvatar = () => {
  const [{ auth }] = useStore();

  return(
    <Avatar image={auth.user.image} size={100} />
  )
};

export default PostAvatar;
