import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';

export default function TileContainer(props) {
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

TileContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TileContainer.defaultProps = {
  checked: false
};