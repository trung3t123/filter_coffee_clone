import colorHandle from 'color';

function makeDarken(color: string, value = 0.5) {
  return colorHandle(color).darken(value).rgb().string();
}

function makeLighten(color: string, value = 0.5) {
  return colorHandle(color).lighten(value).rgb().string();
}

function makeWhiten(color: string, value = 0.5) {
  return colorHandle(color).whiten(value).rgb().string();
}

function makeBlacken(color: string, value = 0.5) {
  return colorHandle(color).blacken(value).rgb().string();
}

function upSaturation(color: string, value = 0.5) {
  return colorHandle(color).saturate(value).rgb().string();
}

function downSaturation(color: string, value = 0.5) {
  return colorHandle(color).desaturate(value).rgb().string();
}

function grayScale(color: string) {
  return colorHandle(color).grayscale().rgb().string();
}

function fade(color: string, value = 0.5) {
  return colorHandle(color).fade(value).rgb().string();
}

function deFade(color: string, value = 0.5) {
  return colorHandle(color).opaquer(value).rgb().string();
}

function mixColor(color1: string, color2: string, value = 1) {
  return colorHandle(color1).mix(colorHandle(color2), value).rgb().string();
}
/**
 * rgba colors will not appear in colors set
 */
const Colors = {
  mainGradientStart: '#00AEFF',
  mainGradientEnd: '#875BFF',
  mainBackgroundColorContainer: 'rgb(0, 0, 0)',
  mainBackgroundColorComponent: '#1D1D1D',
  transparent: 'transparent',
  verifiedUser: 'rgba(56, 201, 118, 1)',

  textInvertedWhiteColor: '#FCFCFC',
  black40: 'rgba(0, 0, 0, 0.4)',
  black70: 'rgba(0, 0, 0, 0.7)',
  black60: 'rgba(0, 0, 0, 0.6)',
  black75: 'rgba(0, 0, 0, 0.75)',
  black15: 'rgba(0, 0, 0, 0.15)',
  black: 'rgb(0, 0, 0)',
  black50: 'rgba(0, 0, 0, 0.5)',
  white: '#FFFFFF',
  customerAddressTextGray: '#494949',
  filterRed: '#550804',
  darkRed: '#A10D02',
  loginGreen: '#51B173',
  borderInputColor: '#ccc',
  whileModalCodePush: 'rgba(0,0,0,0.3)',

  /** theme color */
  whitePorcelain: 'rgb(250, 250, 250)',
  politeWhite: '#FEFFFF',
  lightGrey: '#DDDDDD',
  morningWhite: '#EEE',
  brownGrey: '#666',
  veryLightPink: '#FEEEE7',
  morningOcean: '#F5F6F8',
  morningGrey: '#CCC',
  veryLightGrey: '#F2F2F2',
  sadGray: 'rgba(218,218,218,1)',
  matcha: '#74C8AE',
  corban: '#E7E8E7',
  main: '#D31D49',
  main2: '#DE2F45',
  darkSunset: '#A11637',
  lightSunset: '#EC483E',
  success: '#2ecc71',

  // free colors
  athenGray: 'rgb(247, 247, 248)',
  balticSea: 'rgb(62, 62, 62)',
  bankVault: 'rgb(115, 115, 115)',
  blueNights: 'rgb(54, 58, 69)',
  brightOrange: 'rgb(255, 97, 6)',
  burntBrown: 'rgb(235, 87, 87)',
  call: 'rgb(39, 174, 96)',
  completed: 'rgb(10, 189, 227)',
  danger: 'rgb(231, 76, 60)',
  darkSkyBlue: 'rgb(74, 144, 226)',
  dustyGray: 'rgb(151, 151, 151)',
  eucalyptus: 'rgb(54, 171, 75)',
  frenchBlue: 'rgb(69, 85, 178)',
  gainsboro: 'rgb(220, 220, 220)',
  gray: 'rgb(149, 165, 166)',
  greyishBrown: 'rgb(74, 74, 74)',
  info: 'rgb(0, 204, 255)',
  invisible: 'rgba(0, 0, 0, 0)',
  light_gray: '#E4E3E4',
  lightSalmon: 'rgb(255, 185, 140)',
  main_background: '#f1f2f6',
  malachite: 'rgb(8, 208, 98)',
  metalChi: 'rgb(155, 155, 155)', // #9b9b9b
  money: '#ffd32a',
  more_detail: '#3498db',
  nightRider: '#303030',
  nordicGrassGreen: 'rgb(37, 174, 94)',
  none: 'transparent',
  orange: '#fb6a25',
  orangePink: 'rgb(255, 112, 88)',
  overlay_background: 'rgba(0, 0, 0, 0.8)',
  polo_blue: '#46586b',
  posted: '#F79F1F',
  primary: '#127cd4',
  pumpkin: '#ff8310',
  red: 'red',
  warmRed: 'rgba(247,120,120,1)',
  riverStyx: 'rgb(19, 23, 32)',
  role_description: '#FFFDE7',
  savannahSun: 'rgb(255, 185, 140)',
  gray_light: '#bfc9c9',
  send_message: '#FFC312',
  shadowedSteel: 'rgb(74, 74, 74)', // #4a4a4a
  shipment_in_transit: '#3399ff',
  shipment_new: '#ff6300',
  silver: '#c8c7cc',
  silverGrey: '#c4c4c4',
  silverPolish: 'rgb(199, 199, 199)',
  skyCaptain: 'rgb(36, 39, 51)',
  tealishGreen: 'rgb(0, 224, 101)', // #00e065
  tomato: 'rgb(229, 56, 56)',
  vermilionBird: 'rgb(241, 67, 54)',
  trolleyGrey: 'rgb(130, 130, 130)', // #8282828
  tuna: '#363a45',
  ratingYellow: 'rgba(250,238,145,1)',
  warning: '#ffae42',
  whiteApple: 'rgb(250, 250, 250)', // nigga ?
  whiteSmoke: 'rgb(244, 245, 246)',
  wildDove: 'rgb(139, 139, 139)',
  youngNight: 'rgb(34, 35, 36)', // #222324
  dustyOrange: 'rgb(249,135,35)',
  burtuqaliOrange: 'rgb(255, 104, 3)',
  charcoalGrey: 'rgb(58, 64, 82)',
  black20: 'rgba(0, 0, 0, 0.2)',
  black25: 'rgba(0, 0, 0, 0.25)',
  black95: 'rgba(0, 0, 0, 0.95)',
  mango: 'rgb(255, 189, 46)',
  lightSage: 'rgb(221, 246, 231)',
  redPegasus: 'rgb(220, 2, 2)',
  satinPink: 'rgb(250, 226, 222)',
  halloweenOrange: 'rgb(236, 103, 38)',
  charcoalGreyTwo: 'rgb(38,41, 47)',
  madForMango: 'rgb(245,164, 0)',
  arcticDawn: 'rgb(227, 230, 233)',
  paleBlue: 'rgb(223,243, 253)',
  exclusiveElixir: 'rgb(251,241,221)',
  mintFlash: 'rgb(221, 246, 231)',
  frostyMint: 'rgb(223, 245, 244)',
  christmasSilver: 'rgb(227, 230, 233)',
  roseMadder: 'rgb(229,56,56)',
  safetyOrange: 'rgb(253,99,0)',
  easedPink: 'rgb(251,228,227)',
  punch: 'rgb(219,68,55)',
  porpoise: 'rgb(218,218,218)',
  bavarianCream: 'rgb(255,249,221)',
  azure: '#F0FFFF',
  blue: '#3F84E5',
  silverWhile: '#eee',
  fern: '#51B173',
  seaBuckthorn: '#F68B29',
  brightRed: '#A10D02',
  darkBurgundy: '#6A0B08',
  selectiveYellow: '#F6B200',
  chateauGreen: '#3EAC52',
  cinnabar: '#E34442',
  thunderbird: '#CE1519',
  valencia: '#D74047',
  mineShaft: '#3B3B3B',

  /**
   * Colors modifier
   */
  makeDarken,
  makeLighten,
  makeWhiten,
  makeBlacken,
  upSaturation,
  downSaturation,
  grayScale,
  fade,
  deFade,
  mixColor,
  /**
   *
   */
};

export default Colors;
