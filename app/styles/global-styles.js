/* eslint no-unused-expressions: 0 */

import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished';

import fontAwesome from '../../node_modules/font-awesome/scss/font-awesome.scss';

createGlobalStyle`
  ${normalize()}

  @import ${fontAwesome};

`;
