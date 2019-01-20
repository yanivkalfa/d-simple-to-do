import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';

export default function TileControls(props) {
  return (
    <div className={props.className} >
    </div>
  );
}

TileControls.propTypes = {
  className: PropTypes.string,
};

TileControls.defaultProps = {
  checked: false
};