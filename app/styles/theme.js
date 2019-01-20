import { lighten, darken } from 'polished';

export const Theme = {
  colors: {
   
    //  lighten(0.4, colors.accent)
    "grayBase": "#000",
    "grayDarker": lighten(0.135, '#000'), // #222
    "grayDark": lighten(0.2, '#000'),   // #333
    "gray": lighten(0.335, '#000'), // #555
    "grayLight": lighten(0.467, '#000'), // #777
    "grayLighter": lighten(0.935, '#000'), // #eee
    "white": "#fff",
    "fbBlue": "#4D63C1",
    "googleRed": "#D34135",
    "linkedinBlue": "#273881",
    "newBlue": "#121d6b",
    "abrijitBlue": "#121d6b",
    "abrijitGreen": "#2CB227",
    "abrijitGreen-disabled": "#89D687",
    "abrijitGray": "#d4d5d6",
    "abrijitComments": "#F0F0F0",
    "abrijitProfileGray": "#707070",
    "deepCove": "#051145",
    "osloGray": "#95989A",
    "iron": "#D0D1D2",
    "doveGray": "#716F6F",
    "deepGray": "#444",
    "yourPink": "#FFC3C3",
    "thunderbird": "#D91818",
    "gallery": "#FFFFFF",
    "monza": "#DD0000",
    "tundora": "#4E4D4D",
    "fiord": "#454D70",
    "silverChalice": "#A2A2A2",
    "silver": "#ccc",
    "blueBayoux": "#4D567B",
    "red": "#FF5454",
    "grayModal": "rgba(78, 77, 77, 1)",
    "grayLogin": "#909496",

    "brandPrimary": darken(0.065, '#428bca'), // #337ab7
    "brandSuccess": "#5cb85c",
    "brandInfo": "#5bc0de",
    "brandWarning": "#f0ad4e",
    "brandDanger": "#d9534f",
    "transparent": "transparent"
  },
  sizes: {
    "lgBoardThumbSize": "240px",
    "mdBoardThumbSize": "220px",
    "smBoardThumbSize": "180px",
    "boardThumbTitleHeight": "30px",

    "lgBoardItemSize": "210px",
    "mdBoardItemSize": "190px",
    "smBoardItemSize": "150px"
  },
  animations: {
    defaultTime: '300ms',
    secondaryTime: '450ms'
  },
  animationCurves: {
    defaultCurve: 'cubic-bezier(0.23, 1, 0.32, 1) '
  },
  typo: {
    fontFamily: {
      primary: "'Roboto', sans-serif",
      tezosIcons: "'Tezos-icons'"
    },
    weights: {
      light: 100,
      normal: 400,
      bold: 500
    }
  },
  layers: {
    top: 1000,
    middle: 900,
    bottom: 800
  }
};

export default Theme;
