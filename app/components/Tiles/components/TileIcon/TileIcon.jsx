import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';


const StyledTileIcon = styled.i`
  font-size: ${ms(-1)};
`;

export default function TileIcon(props) {
  const {
    className,
    type
  } = props;

  let iconClass = '';
  if ( type === 'board' ) {
    iconClass = 'fas fa-th';
  }

  if ( type === 'pin' ) {
    iconClass = 'fal fa-thumbtack';
  }

  if ( type === 'profile' ) {
    iconClass = 'fal fa-user';
  }
  return <StyledTileIcon className={classnames(className, iconClass)} />;
}

TileIcon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

TileIcon.defaultProps = {
  type: 'board'
};



