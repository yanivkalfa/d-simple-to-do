import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'styles/helpers';
import { scaleFont, scale } from 'styles/common';

export default function SearchTile(props) {
  const {
    className,
    type,
    thumbnail,
    name,
    description,
    boardId,
    pinId,
    profileId
  } = props;

  let linkTo = '';

  if ( type === 'board' ) {
    linkTo = `/board/${boardId}`;
  }

  if ( type === 'pin' ) {
    linkTo = `/board/${boardId}/pin/${pinId}`;
  }

  if ( type === 'profile' ) {
    linkTo = `/profile/${profileId}/boardz`;
  }
  
  return (
    <div />
  );
}

SearchTile.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  boardId: PropTypes.string,
  pinId: PropTypes.string,
  profileId: PropTypes.string
};