import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';

import TileContainer from '../components/TileContainer/TileContainer';
import TileImageContainer from '../components/TileImageContainer/TileImageContainer';
import TileImage from '../components/TileImage/TileImage';
import TileName from '../components/TileName/TileName';
import TileDescriptionContainer from '../components/TileDescriptionContainer/TileDescriptionContainer';
import TileDescription from '../components/TileDescription/TileDescription';
import TileIcon from '../components/TileIcon/TileIcon';

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
    <TileContainer 
      className={props.className}
    >
      <TileImageContainer>
        <TileImage 
          linkTo={linkTo} 
          thumbnail={thumbnail}  
        />
      </TileImageContainer>
      <TileName>{ name }</TileName>
      <TileDescriptionContainer>
        <TileDescription>{ description }</TileDescription>
        <TileIcon type={type} />
      </TileDescriptionContainer>
    </TileContainer>
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