import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generatePath } from 'react-router-dom';

import { A } from 'components/Text';
import { Spacing } from 'components/Layout';
import theme from 'theme';

import * as Routes from 'routes';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  background-color: white;
  padding: ${p => p.theme.spacing.sm};
  border-radius: ${p => p.theme.radius.sm};
  border: 1px solid ${p => p.theme.colors.border.main};
  transition: border-color 0.1s;
`;


const PeopleCard = () => {
  return (
    <div>
      
    </div>
  )
}



export default PeopleCard;
