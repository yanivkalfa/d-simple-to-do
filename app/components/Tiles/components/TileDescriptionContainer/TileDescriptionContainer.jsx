import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';

export default function TileDescriptionContainer(props) {
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

TileDescriptionContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TileDescriptionContainer.defaultProps = {
  checked: false
};