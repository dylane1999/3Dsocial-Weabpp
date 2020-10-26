import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { generatePath } from "react-router-dom";

import { A } from "components/Text";
import { Spacing } from "components/Layout";
import theme from "theme";

import * as Routes from "routes";

const Root = styled.div`
  width: 312px;
  height: 480px;
  background: #404040;
  border-radius: 8.64545px;


`;

const PeopleCard = (props) => {
  return <Root></Root>;
};

export default PeopleCard;
