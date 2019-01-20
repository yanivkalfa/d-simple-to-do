/* eslint no-unused-expressions: 0 */

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import fontAwesome from '../../../node_modules/font-awesome/scss/font-awesome.scss';

injectGlobal`
  ${normalize()}

  @import ${fontAwesome};

`;
