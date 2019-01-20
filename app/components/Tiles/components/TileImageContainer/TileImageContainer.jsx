import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';

export default function TileImageContainer(props) {
  const {
    children,
    className
  } = props;
  return (
    <div className={className} >
      { children }
    </div>
  );
}

TileImageContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TileImageContainer.defaultProps = {
  checked: false
};