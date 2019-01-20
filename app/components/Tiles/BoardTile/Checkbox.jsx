import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'main/styles/helpers';
import { scaleFont, scale } from 'main/styles/common';

/*
const Tab = styled(Button)`
  background: ${({ isActive, theme: { colors } }) =>
  isActive ? colors.white : colors.accent};
  color: ${({ isActive, theme: { colors } }) =>
  isActive ? colors.primary : lighten(0.4, colors.accent)};
  cursor: ${({ isReady }) => (isReady ? 'pointer' : 'initial')};
  text-align: center;
  font-weight: 500;
  padding: ${ms(-1)} ${ms(1)};
  border-radius: 0;
`;
*/

const CheckBox = styled.div`
  cursor: pointer;
  display: block;
  padding: 2px;
  height: ${ms(0)};
  width: ${ms(0)};
  border: 1px solid ${({ theme: { colors } }) => colors.abrijitGray};
  border-radius: 3px;
`;

const CheckBoxMarker = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 2px;
  background-color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.abrijitGreen : colors.transparent };
`;

export default function Checkbox(props) {
  return (
    <CheckBox
      className={props.className}
      onClick={props.onChange}
    >
      <CheckBoxMarker
        isActive={props.checked}
      />
    </CheckBox>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false
};