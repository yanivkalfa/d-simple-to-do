import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';


export default function TileImage(props) {
  const {
    className,
    linkTo,
    thumbnail
  } = props;
  return (
    <a
      href={linkTo}
      className={className}
    >
      <img src={thumbnail}/>
    </a>
  );
}

TileImage.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  thumbnail: PropTypes.string
};

TileImage.defaultProps = {
  checked: false
};