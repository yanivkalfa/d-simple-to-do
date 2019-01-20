import styled, { css } from 'styled-components';
import { ms } from './helpers';


export function scale(scales) {
  return css`
    ${
      scales.map((scale) => {
        if (scale[0] === 'default' ) {
          return (scale[1] || []).map((style) => `${style[0]}: ${style[1]};`).join('\n');
        }
        return `
          @media screen and (min-width: ${scale[0]}) {
            ${(scale[1] || []).map((style) => `${style[0]}: ${style[1]};`).join('\n')}
          }
        `;
      })
    }
  `;
}

export const scaleFont = css`
  ${
  scale(
    [
      [ 'default', [['font-size', ms(1)]] ],
      [ '560px', [['font-size',  ms(1.7)]] ],
      [ '768px', [['font-size',  ms(1.8)]] ],
      [ '992px', [['font-size',  ms(2.4)]] ],
      [ '1200px', [['font-size',  ms(2.8)]] ],
      [ '1400px', [['font-size',  ms(3.2)]] ],
      [ '1600px', [['font-size',  ms(3.6)]] ]
    ]
  )
  }
`;
