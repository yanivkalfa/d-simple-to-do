// @flow
import React, { Component } from 'react';

import styled, { css } from 'styled-components';
import { ms, msr } from 'styles/helpers';
import { scaleFont, scale } from 'styles/common';

type Props = {
  a: string
};
export default class JustTryOn extends Component<Props> {
  props: Props;

  render() {
    const { a, ...rest } = this.props;
    //  console.log('rest', rest);
    return (
      <div className="home2">{ a || 'empty' }</div>
    );
  }
}